import React from 'react';
import { AuthContext } from './authContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase Init/firebase.init';
// import { auth } from '../Firebase Init/firebase.init';

const AuthProvider = ({ children }) => {
    
    // create Useer
    const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
        
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    
    const userInfo = {
        createUser,
        singInUser
        
    }
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;