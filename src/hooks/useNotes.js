import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FirebaseDB } from "../firebase/config";
import { useLoaderStore, useModalStore } from "../store";

export const useNotes = () => {

    const [notes, setNotes] = useState([]);
    const { changeLoading } = useLoaderStore();
    const { closeModal } = useModalStore();

    useEffect(() => {
        let unsubscribed = true;

        unsubscribed && getNotes(sessionStorage.getItem("auth"));

        return () => (unsubscribed = false);
    }, [notes]);

    const getNotes = async (uid) => {
        const ref = query(
            collection(FirebaseDB, "notas"),
            where("uid", "==", uid)
        );
        const response = await getDocs(ref);
        setNotes(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const createNote = async (params, uid) => {
        changeLoading(true);
        const { notas } = params;

        await addDoc(collection(FirebaseDB, "notas"), {
            notas,
            uid,
        });

        setNotes((prev) => [...prev, params]);

        closeModal();
        changeLoading(false);
    };

    const updateNote = async (id, { notas }) => {
        changeLoading(true);
        const userRef = doc(collection(FirebaseDB, "notas"), id);

        await updateDoc(userRef, { notas });

        setNotes(
            notes.map((note) => (note.id === id ? { ...note, notas } : note))
        );

        closeModal();
        changeLoading(false);
    };

    const deleteNote = async (id) => {
        changeLoading(true);
        const userRef = doc(collection(FirebaseDB, "notas"), id);

        await deleteDoc(userRef);
        setNotes((prev) => prev.filter((note) => note.id !== id));
        closeModal();
        changeLoading(false);
    };

    return {
        notes,
        getNotes,
        createNote,
        updateNote,
        deleteNote,
    };
};