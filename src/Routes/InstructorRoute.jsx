import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../components/hooks/useInstructor";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor) {
        return children;
    }

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location, search: location.search }}></Navigate>;
    }
};

export default InstructorRoute;