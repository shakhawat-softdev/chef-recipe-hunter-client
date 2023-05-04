import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { Ring } from 'react-spinners-css';
import Navbar1 from '../pages/shared/Navbar1';


const Main = () => {
   const navigation = useNavigation()

   return (
      <>
         <Navbar />
         {/* <Navbar1 /> */}
         {/* <div className='text-center'>{navigation.state === 'loading' && <Ring />}</div> */}
         <Outlet />
         <Footer />
      </>
   );
};

export default Main;