import { RegisterForm } from "../components/registro/RegisterForm";
import "../components/stylesComponents/styles.css";
import "animate.css";

export const RegisterPage = () => {
    
    return (
        <div className="imageBase bg-cover">
            <div className="flex flex-col items-center justify-center h-screen text-center animate__animated animate__fadeIn backdrop-blur-sm">
                <RegisterForm />
            </div>
        </div>
    );
}