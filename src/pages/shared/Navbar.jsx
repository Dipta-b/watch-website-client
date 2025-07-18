import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../components/hooks/useAuth';

const Navbar = () => {
    const { user, signOutUser } = useAuth();

    const handleSignOut = () => {
        signOutUser()

    }

    const links = (
        <div className="flex space-x-4 	">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );

    return (
        <div className="navbar bg-slate-900">
            {/* Left Side - Replace daisyUI with dropdown */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>

            {/* Center - Navigation for large screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* Right Side - Search and Notification */}
            <div className="navbar-end">
                {
                    user ? <button onClick={handleSignOut} className="btn btn-ghost btn-circle">
                        Sign Out
                    </button> : <NavLink to="/login">
                        <button className="btn btn-ghost btn-circle">
                            Login
                        </button>
                    </NavLink>
                }
                <div className="flex items-center gap-2">
                    {user && (
                        <>
                            <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />
                            <span>{user.displayName}</span>
                        </>
                    )}
                </div>
            </div>
        </div>


    )
}

export default Navbar