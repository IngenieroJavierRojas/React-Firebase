import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { FirebaseAuth, FirebaseDB } from "../firebase/config";
import { useAuthStore } from "../store";
import { useEffect } from "react";
import { useLoaderStore } from "../store";
import { useNavigate } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();

export const useAuth = () => {
    
    const navigate = useNavigate();
    const { auth, changeAuth } = useAuthStore();
    const { changeLoading } = useLoaderStore();

    useEffect(() => {
        let unsubscribed = true;

        unsubscribed && validateAuth();

        return () => (unsubscribed = false);
    }, []);

    const validateAuth = async () => {
        changeLoading(true);
        const session = sessionStorage.getItem("auth");

        if (!session) {
            changeAuth(null);
            changeLoading(false);
            return;
        }

        const ref = doc(collection(FirebaseDB, "usuarios"), session);
        const response = await getDoc(ref);

        if (!response.data()) {
            changeAuth(null);
            changeLoading(false);
            return;
        }

        const { uid, auth: authDB } = response.data();

        if (!authDB) {
            changeAuth(null);
            changeLoading(false);
            return;
        }

        changeAuth(uid);
        changeLoading(false);
    }

    const loginWithEmailPassword = async (data) => {
      
        try {
            const { email, password } = data;
            const resp = await signInWithEmailAndPassword(
                FirebaseAuth,
                email,
                password
            );

            const {
                user: { uid },
            } = resp;

            changeAuth(uid);
            updateLoginUser({ uid, auth: true });
            sessionStorage.setItem("auth", uid);
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message);
        }
  
    }

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(FirebaseAuth, googleProvider);
            const user = result.user;

            return {
                ok: true,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName,
            };
        } catch (error) {
            console.log(error);
        }
    }

    const registerUserWithEmailPassword = async (data) => {
        changeLoading(true);
        try {
            const { email, password } = data;
            const resp = await createUserWithEmailAndPassword(
                FirebaseAuth,
                email,
                password
            );
            const { uid } = resp.user;
            registerInDataBase({data, uid})
            navigate("/login");
            return {
                ok: true,
                uid: uid,
            };
        } catch (error) {
            return { ok: false, errorMessage: error.message };
        }
        
        changeLoading(false);
    }

    const logoutFirebase = async () => {
        try {
            changeLoading(true);
            const ref = doc(collection(FirebaseDB, "usuarios"), auth);

            await updateDoc(ref, { auth: false });

            FirebaseAuth.signOut();

            changeAuth(null);
            sessionStorage.removeItem("auth");
            setTimeout(() => changeLoading(false), 5000);
        } catch (error) {
            console.log(error);
        }
    }

    const registerInDataBase = async ({ data, uid }) => {
        try {
            await addDoc(collection(FirebaseDB, "usuarios"), {
                ...data,
                uid,
                auth: false,
            });
            console.log("Insercion hecha correctamente");
        } catch (error) {
            console.log(
                "Error al momento de registro en la base de datos: ",
                error
            );
        }
    }

    const updateLoginUser = async ({ uid, auth }) => {
         if (!uid) {
             console.log("revisar, uid no valido");
             return;
         }

         const userRef = doc(collection(FirebaseDB, "usuarios"), uid);

         try {
             await updateDoc(userRef, {
                 auth,
             });
             console.log("Documento actualizado");
         } catch (error) {
             console.log("Error actualizando documento: ", error);
         }
    }

    return {
        loginWithEmailPassword,
        loginWithGoogle,
        registerUserWithEmailPassword,
        logoutFirebase,
        registerInDataBase,
    }
}