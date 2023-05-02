import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';




export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loader, setLoader] = useState(true)

   const registerUser = (email, password) => {
      setLoader(true)
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const sinInUser = (email, password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
   };

   const logout = () => {
      setLoader(true)
      return signOut(auth);
   }

   // CurrentlysignInuser
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         setUser(user)
         console.log(user);
      });
      return () => {
         unsubscribe();
         setLoader(false)
      }
   }, [])

   const authInfo = { user, registerUser, sinInUser, user, logout, loader }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;