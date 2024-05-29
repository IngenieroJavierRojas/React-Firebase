import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth, children }) =>  auth ? children : <Navigate to="/login" />;
