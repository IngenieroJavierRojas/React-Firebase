import { Navigate } from "react-router-dom";

export const PublicRoute = ({ auth, children }) => !auth ? children : <Navigate to="/home" />;