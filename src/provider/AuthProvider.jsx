import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleRegisterGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const handleLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleLogout = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        handleRegister,
        handleRegisterGoogle,
        handleLogin,
        handleLogout
    }

    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;