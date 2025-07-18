import React from 'react';
import loginAnimation from '../../assets/login/Login.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';

const Login = () => {
    const {
        signInuser,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook
    } = useAuth();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInuser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('User signed in');
                form.reset();
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 flex items-center justify-center px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Animation Section */}
                <div className="hidden lg:flex justify-center">
                    <Lottie animationData={loginAnimation} loop={true} autoPlay={true} />
                </div>

                {/* Login Form */}
                <div className="card w-full bg-white shadow-2xl rounded-2xl">
                    <form onSubmit={handleSignIn} className="card-body p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login to Your Account</h2>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="you@example.com"
                                className="input input-bordered w-full text-black"
                                required
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text text-gray-700">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="••••••••"
                                className="input input-bordered w-full text-black"
                                required
                            />
                        </div>

                        <div className="text-right text-sm mb-4">
                            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
                        </div>

                        <div className="form-control">
                            <button className="btn btn-primary rounded-full w-full hover:bg-yellow-400 hover:border-b-4 hover:text-black border-yellow-500 transition duration-300">
                                Login
                            </button>
                        </div>

                        <p className="text-sm text-center text-gray-500 mt-6">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-600 hover:underline">Sign Up</Link>
                        </p>

                        {/* Divider and Social Login */}
                        <div className="divider my-4">Or sign in with</div>

                        <div className="flex justify-center gap-4 flex-wrap">
                            <button

                                type="button"
                                className="btn btn-outline rounded-full"
                            >
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                                Google
                            </button>

                            <button

                                type="button"
                                className="btn btn-outline rounded-full"
                            >
                                <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                                GitHub
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline rounded-full"
                            >
                                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                                Facebook
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
