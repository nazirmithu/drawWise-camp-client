import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="m-4">
            <h2 className="text-3xl  font-serif">Welcome back, {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;