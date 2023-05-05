import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navigationbar from '../pages/shared/Navigationbar';




const Main = () => {
   const navigation = useNavigation()

   return (
      <>
         <Navbar />
         {/* <Navigationbar /> */}

         {/* <div className='text-center'>{navigation.state === 'loading' && <Ring />}</div> */}
         <Outlet />
         <Footer />
      </>
   );
};

export default Main;