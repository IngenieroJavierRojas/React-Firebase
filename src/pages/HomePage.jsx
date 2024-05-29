import {  AddNewNotes,} from "../notes";
import { CustomModal } from "../components/CustomModal";
import { useModalStore } from "../store";
import { useAuth } from "../hooks/useAuth";
import { NotaInfo } from "../components";
import image from "../assets/image/añadir.svg";
import imagenExit from "../assets/image/exit.svg";
import "../components/stylesComponents/styles.css";
import "animate.css";
import { useNotes } from "../hooks/useNotes";

export const HomePage = () => {
    
    const { logoutFirebase } = useAuth();
    const { showContent } = useModalStore();
    const { notes, createNote, updateNote, deleteNote } = useNotes();

    return (
        <div className="imageBase bg-cover">
            <div className="grid grid-cols-12 items-center justify-center h-screen m-auto backdrop-blur-sm">
                <main className="col-span-12 h-5/6 w-10/12 bg-white imagen2 bg-cover m-auto overflow-auto rounded-2xl ">
                    <CustomModal />
                    <aside className="fixed">
                        <button onClick={logoutFirebase}>
                            <img
                                src={imagenExit}
                                alt="exit"
                                className=" animate__animated animate__flipInX  fixed self-start"
                            />
                        </button>
                        <button
                            onClick={() =>
                                showContent(<AddNewNotes action={ createNote } />)
                            }
                        >
                            <img
                                src={image}
                                alt="nombre"
                                className="self-start  animate__animated animate__flipInX fixed top-32"
                            />
                        </button>
                    </aside>
                    
                    <NotaInfo
                        notes={notes}
                        updateNote={updateNote}
                        deleteNote={deleteNote}
                    />
                </main>
            </div>
        </div>
    );
}