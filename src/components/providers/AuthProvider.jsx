import React, { use, useEffect, useState } from 'react'

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import AuthContext from './AuthContext';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInuser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    const [token, setToken] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser?.email) {
                try {
                    // Get JWT from your backend
                    const { data } = await axios.post('http://localhost:5000/jwt', { email: currentUser.email });
                    setToken(data.token);

                    // Check if user is admin
                    const res = await axios.get(`http://localhost:5000/users/admin/${currentUser.email}`, {
                        headers: { Authorization: `Bearer ${data.token}` },
                    });
                    setAdmin(res.data.admin);
                } catch (err) {
                    console.error(err);
                    setAdmin(false);
                }
            } else {
                setToken(null);
                setAdmin(false);
            }
        });

        return () => unsubscribe();
    }, []);


    const authInfo = {
        user,
        loading,
        token,
        createUser,
        signInuser,
        signOutUser,
        updateUserProfile,
        admin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider