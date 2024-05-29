import { useForm as FormHook } from "react-hook-form";

export const EditNotes = ({ nota, action }) => {

    const { notas: notes, id } = nota;
    const { register, handleSubmit } = FormHook();

    return (
        <div className="flex flex-col justify-center p-7 m-auto">
            <form
                className="flex flex-col self-center m-auto pt-2 "
                onSubmit={handleSubmit((e) => action(id, e))}
            >
                <textarea
                    name="notas"
                    id="notas"
                    rows={7}
                    cols={40}
                    {...register("notas")}
                    defaultValue={notes}
                    className="w-11/12 border-2 border-indigo-50 m-auto resize-none rounded-2xl p-2 "
                    placeholder=" ¡ Agreguemos una nueva nota!"
                >
                   
                </textarea>
                <div className="">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl w-3/12 mb-2 m-auto  fixed  bottom-2 right-4"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};
