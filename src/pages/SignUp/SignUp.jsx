import { useForm } from 'react-hook-form';
import signUpAnimation from '../../../public/signup.json'
import Lottie from "lottie-react";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                profileUpdate(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile updated');
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div>
                        <Lottie animationData={signUpAnimation} />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" placeholder="Enter Your Photo URL" {...register("photo", { required: true })} className="input input-bordered" />
                            {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Your Password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                            })} className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must one uppercase, one lowercase, one number, one special character</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="divider">SignUp With Social Accounts</div>
                            <GoogleLogin></GoogleLogin>
                            <p className='my-4 text-center'>Already Have an Account? <Link className='text-rose-600 font-bold' to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;