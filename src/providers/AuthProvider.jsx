import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';




export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const registerUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const sinInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   };

   const logout = () => {

   }

   // CurrentlysignInuser
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         setUser(user)
         console.log(user);
      });
      return () => {
         unsubscribe();
      }
   }, [])

   const authInfo = { user, registerUser, sinInUser, user, logout }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;