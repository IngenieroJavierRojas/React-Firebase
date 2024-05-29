import { useForm as FormHook } from "react-hook-form";
export const AddNewNotes = ({ action }) => {

    const { register, handleSubmit } = FormHook();
    
    return (
        <div className="flex flex-col justify-center p-7 m-auto">
            <form
                className="flex flex-col self-center m-auto pt-2 "
                onSubmit={handleSubmit((e) => action(e, sessionStorage.getItem("auth")))}
            >
                <textarea
                    name="notas"
                    id="notas"
                    rows={6}
                    cols={40}
                    {...register("notas")}
                    className="w-11/12 border-2 border-indigo-50 m-auto resize-none rounded-2xl p-4"
                    placeholder=" ¡ Agreguemos una nueva nota!"
                />
                <div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl w-3/12 mb-2 m-auto  fixed  bottom-2 right-4"
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    );
};
