import { CloseModalIcon } from "../components/Icons";
import "animate.css";
import { useModalStore } from "../store/useModalStore";

export const AcceptDelete = ({ id, action }) => {

    const { closeModal } = useModalStore();
    
    return (
        <div className="flex flex-col justify-center m-auto bg-white animate__animated animate__fadeIn p-10 rounded-2xl">
            <span
                className="fixed top-0 right-2 cursor-pointer"
                onClick={() => closeModal()}
            >
                <CloseModalIcon />{" "}
            </span>
            <h2 className="font-bold mb-5">
                ¿Estás seguro de eliminar este registro?
            </h2>

            <p>
                Ten presente que después de aceptar, el registro de la nota no
                podrá ser recuperado
            </p>
            <div className="mt-8 ">
                <button
                    onClick={() => action(id)}
                    className="bg-green-500 -500 hover:bg-green-700-700 text-white font-bold py-2 px-4 rounded-2xl w-10/12 "
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
};
