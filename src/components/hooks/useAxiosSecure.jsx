import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';



const axiosSecure = axios.create({
    baseURL: 'https://draw-wise-camp-server.vercel.app'
});

const useAxiosSecure = () => {
    const { handleSignOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await handleSignOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [handleSignOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;