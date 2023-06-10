import { useForm } from 'react-hook-form';
import loginAnimation from '../../../public/login.json'
import Lottie from "lottie-react";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        console.log(data)
        handleSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true })
            })
    };


    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center mt-20 lg:text-left">
                    <div>
                        <Lottie animationData={loginAnimation} />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-20 bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <p className='text-5xl text-center font-serif'>Login</p>
                        <p className='font-serif text-center'>Sign in to access your account</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Your Password" {...register("password", { required: true })} className="input input-bordered" />
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="divider">Login With Social Accounts</div>
                            <GoogleLogin></GoogleLogin>
                            <p className='my-2 text-center'>New to DrawWiseCamp? <Link className='text-rose-600 font-bold' to='/signup'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

