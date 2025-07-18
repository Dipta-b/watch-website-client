import Lottie from 'lottie-react'
import React from 'react'
import registerAnimation from '../../assets/login/register.json'
import { Link } from 'react-router-dom'
import useAuth from '../../components/hooks/useAuth'

const Register = () => {
    const { createUser, updateUserProfile, user } = useAuth();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        // console.log(name, email, password, photoURL)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(name, photoURL)
                    .then(() => {
                        alert('user created and profile updated');
                        form.reset();
                    })
            })
            .catch(error => {
                alert(error.message)
            })

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Lottie Animation */}
                <div className="lg:flex">
                    <Lottie animationData={registerAnimation} className="w-full max-w-md" loop={true} />
                </div>

                {/* Register Form with hover animation */}
                <div className="card w-full bg-white shadow-xl rounded-xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>

                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                className="input input-bordered w-full text-black"

                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="you@example.com"
                                className="input input-bordered w-full text-black"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="••••••••"
                                className="input input-bordered w-full text-black"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
                            <input
                                type="text"
                                name='photoURL'
                                placeholder="https://example.com/photo.jpg"
                                className="input input-bordered w-full text-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full rounded-full hover:bg-yellow-400 hover:border-b-4 border-yellow-500 transition duration-300"
                        >
                            Register
                        </button>

                        <p className="text-sm text-center text-gray-500 mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
