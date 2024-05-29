import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import registro from "../../assets/image/register.svg";

export const RegisterForm = () => {

    const { register, handleSubmit } = useForm();
    const { registerUserWithEmailPassword } = useAuth();
    
    return (
        <form
            onSubmit={handleSubmit(registerUserWithEmailPassword)}
            className="flex flex-col gap-5 w-full max-w-xs text-center  h-3/5 bg-white rounded-3xl"
        >
            <img
                src={registro}
                alt="imagen "
                className="justify-center items-center pt-3"
            />

            <input
                type="text"
                placeholder="Nombre"
                name="name"
                {...register("name")}
                className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-2 w-9/12 self-center"
            />

            <input
                type="text"
                placeholder="Apellido"
                name="apellidos"
                {...register("apellidos")}
                className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-2 w-9/12 self-center"
            />

            <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email")}
                className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-2 w-9/12 self-center"
            />

            <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password")}
                className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-2 w-9/12 self-center"
            />

            <button
                type="submit"
                className="bg-gradient-to-r from-lime-500 to-amber-800 text-white p-2 rounded-2xl  w-6/12 m-auto"
            >
                Registrar
            </button>

            <NavLink
                to="/login"
                className="text-sm text-gray-500 hover:text-indigo-500 pb-3"
            >
                ¿Tienes una cuenta? Ingresa
            </NavLink>
        </form>
    );
}