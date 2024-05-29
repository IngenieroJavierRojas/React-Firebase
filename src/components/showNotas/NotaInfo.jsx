import { useNotes } from "../../hooks/useNotes";
import { Delete, Editar } from "../Icons";
import { AcceptDelete, EditNotes } from "../../notes";
import { useModalStore } from "../../store";

export const NotaInfo = () => {

    const { notes, updateNote, deleteNote } = useNotes();
    const { showContent } = useModalStore();

    return (
        <section className="grid grid-row-3 grid-cols-12 p-8 gap-4">
            {notes?.map((nota) => (
                <div
                    key={nota.id}
                    className="bg-inherit  col-span-3 rounded-lg text-center h-62 overflow-auto w-10/12 m-auto relative "
                >
                    <textarea
                        readOnly
                        className="resize-none text-center bg-white rounded-2xl w-11/12 h-56 p-2"
                        rows={8}
                        cols={25}
                        disabled={true}
                        value={nota.notas}
                    />

                    <span
                        onClick={() =>
                            showContent(
                                <EditNotes nota={nota} action={updateNote} />
                            )
                        }
                        className=" bg-transparent bottom-2 cursor-pointer  absolute right-8"
                    >
                        <button>
                            <Editar />
                        </button>
                    </span>

                    <span
                        onClick={() =>
                            showContent(
                                <AcceptDelete id={nota.id} action={deleteNote} />
                            )
                        }
                        className="bg-transparent cursor-pointer  absolute bottom-2 right-1"
                    >
                        <button>
                            <Delete />
                        </button>
                    </span>
                </div>
            ))}
        </section>
    );
}