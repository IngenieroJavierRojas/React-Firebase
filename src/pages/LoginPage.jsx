import React from "react";
import "../components/stylesComponents/styles.css";
import { LoginForm } from "../components/login/LoginForm";

export const LoginPage = () => {
   
    return (
        <div className="imageBase bg-cover">
            <div className="flex flex-col items-center justify-center h-screen animate__animated animate__fadeIn backdrop-blur-sm">
                <LoginForm />
            </div>
        </div>
    );
};