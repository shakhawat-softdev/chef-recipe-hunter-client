import React from 'react';
import banner from '../../public/images/banner.jpg'

const Home = () => {
   return (
      <div className='w-full max-w-7xl mx-auto'>
         <h1 className='text-center text-2xl bg-stone-100 my-5 p-5 rounded-md '>Meet our master chef, who combines traditional techniques with modern flavors to create culinary magic. His dishes are both beautiful and delicious, leaving you wanting more with every bite.</h1>
         <div className='w-full lg:flex gap-5'>
            <div className='w-1/2'>
               <img src={banner} alt="" />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
               <h1 className='text-2xl' >Our talented chef brings a unique perspective to classic dishes, infusing them with unexpected ingredients and bold flavors. You'll be amazed by the delicious combinations he creates.</h1>
            </div>
         </div>

      </div>
   );
};

export default Home;