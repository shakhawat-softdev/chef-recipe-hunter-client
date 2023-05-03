import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const location = useLocation();
   // console.log(location);

   if (loader) {
      return <p>Loading.........</p>
   }

   if (user) {
      return children;
   }

   else {
      return <Navigate to='/login' state={{ from: location }} replace  ></Navigate>
   }

};

export default PrivateRoute;