import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGooglePopup = () => {
        googleSignIn()
            .then(result => {
                navigate(from, { replace: true })
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="text-center">
            <button onClick={handleGooglePopup} className="btn btn-outline btn-success gap-2"><FaGoogle /> Continue with Google</button>
        </div>
    );
};

export default GoogleLogin;