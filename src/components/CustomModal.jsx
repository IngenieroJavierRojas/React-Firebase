import { useModalStore } from "../store/useModalStore";
import { CloseModalIcon } from "./Icons";
import Modal from "react-modal";
import "animate.css";

export const CustomModal = () => {
    
    const { isOpenModal, content, closeModal } = useModalStore();

    if (!isOpenModal) return <></>;

    return (
        <div className="flex flex-col  h-screen fixed justify-center ">
            <Modal
                appElement={document.getElementById("root")}
                isOpen={isOpenModal}
                className="w-3/12  m-auto transform translate-y-40 z-auto justify-center text-center animate__animated animate__fadeIn bg-white h-72 rounded-2xl border-2 border-green-200  "
            >
                <span
                    className="fixed right-2 cursor-pointer"
                    onClick={() => closeModal()}
                >
                    <CloseModalIcon />
                </span>
                {content}
            </Modal>
        </div>
    );
};
