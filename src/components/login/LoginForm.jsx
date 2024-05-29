import React from "react";
import { useForm } from "react-hook-form";
import imagen from "../../assets/image/avatar.svg";
import { Google } from "@mui/icons-material";
import "animate.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {

    const { loginWithEmailPassword, loginWithGoogle } = useAuth();
    const { register, handleSubmit } = useForm();

    return (
        <form
            className="flex flex-col gap-6 w-full max-w-xs text-center h-auto bg-white rounded-3xl z-10 m-auto"
            onSubmit={ handleSubmit(loginWithEmailPassword) }
        >
            <img
                src={imagen}
                alt="imagen de avatar"
                className="mt-4  m-auto "
            />
            <h1>Inicio</h1>
            <input
                type="email"
                name="email"
                placeholder="Correo electronico"
                className="border border-gray-300 p-2 rounded-2xl w-9/12 self-center"
                {...register("email", {
                    required: true,
                })}
            />

            <input
                type="password"
                placeholder="Contraseña"
                className="border border-gray-300 p-2 rounded-2xl w-9/12 self-center"
                name="password"
                {...register("password", {
                    required: true,
                    minLength: 6,
                })}
            />
            <div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-lime-500 to-amber-800 text-white p-2 rounded-2xl  w-5/12 "
                >
                    Ingresar
                </button>
                <button
                    className="self-end w-4/12"
                    onClick={ loginWithGoogle }
                >
                    <Google />
                    Google
                </button>
            </div>

            <NavLink
                to="/register"
                className="text-sm text-gray-500 hover:text-indigo-500 pb-5"
            >
                ¿No tienes una cuenta? Regístrate
            </NavLink>
        </form>
    );
};