import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useAuthStore } from "../store";


export const RoutesAll = () => {
    const { auth } = useAuthStore();

    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <PrivateRoute auth={auth}>
                      <HomePage/>
                    </PrivateRoute>
                }
            />

            <Route
                path="/login"
                element={
                    <PublicRoute auth={auth}>
                        <LoginPage />
                    </PublicRoute>
                }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};
