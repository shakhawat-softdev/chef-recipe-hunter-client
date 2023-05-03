import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { Ring } from 'react-spinners-css';


const Main = () => {
   const navigation = useNavigation()

   return (
      <div className='m-auto'>
         <Navbar />
         <div className='text-center my-20'>{navigation.state === 'loading' && <Ring />}</div>
         <Outlet />
         <Footer />
      </div>
   );
};

export default Main;