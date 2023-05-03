import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);

   if (loader) {
      return <p>Loading.........</p>
   }

   if (user) {
      return children;
   }

   else {
      return <Navigate to='/login'></Navigate>
   }

};

export default PrivateRoute;