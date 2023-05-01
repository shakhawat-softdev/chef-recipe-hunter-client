import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
   return (
      <>
         <Navbar />
         <Outlet />
      </>
   );
};

export default Main;