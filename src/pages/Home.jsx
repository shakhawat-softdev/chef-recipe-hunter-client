import React from 'react';
import banner from '../../public/images/banner.jpg'
import banner1 from '../../public/images/banner1.jpg'
import banner3 from '../../public/images/banner3.jpg'
import { useLoaderData } from 'react-router-dom';
import { Button, Space } from 'antd';


const Home = () => {
   const data = useLoaderData()
   console.log(data);

   return (
      <div className='w-full max-w-7xl mx-auto'>
         <div style={{ backgroundImage: `url(${banner1})`, height: '500px' }} >
            <h1 className='text-7xl text-white  text-center '><span className="font-thin">Meat</span> <span>Chiken</span></h1>
         </div>
         {/* chef section start */}



         {/* chef section end */}
         <h1 className='text-center text-2xl bg-stone-100 my-5 p-5 rounded-md '>Meet our master chef, who combines traditional techniques with modern flavors to create culinary magic.</h1>
         <div className='w-full lg:flex'>
            <div className='w-1/2'>
               <img className='h-5/6' src={banner3} alt="" />
            </div>
            <div className='w-1/2'>
               <div className="card bg-base-100 ">
                  <div className="card-body items-center text-center">
                     <div className="card-title "><h1 className='text-3xl' ><span >Our Chef</span> <span className='font-bold'>Specialties</span></h1></div>
                     <p className='mt-4'><small>Our website is dedicated to celebrating the art and craft of cooking and the talented chefs who create culinary masterpieces. From classic French cuisine to contemporary fusion dishes, we showcase the work of chefs from all over the world, offering insights into their unique styles, techniques, and philosophies. Our articles, interviews, and recipes inspire food lovers of all levels to explore new flavors and experiment in the kitchen. Whether you're a professional chef or a home cook, our website is the ultimate destination for discovering the joys of gastronomy.</small></p>
                  </div>
                  <hr className='border ' />
               </div>
               <div className='flex gap-2 w-full mt-5 justify-center items-center'>
                  <div className='card shadow-lg'>
                     <div className='card-body '>
                        <h2 className='card-title'>Guacamole </h2>
                        <p>$123</p>
                     </div>
                  </div>
                  <div className='card shadow-lg'>
                     <div className='card-body '>
                        <h2 className='card-title'>Guacamole </h2>
                        <p>$123</p>
                     </div>
                  </div>
                  <div className='card shadow-lg'>
                     <div className='card-body '>
                        <h2 className='card-title'>Guacamole </h2>
                        <p>$123</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Space wrap className='flex justify-center items-start'>
            <Button type="primary" danger>All</Button>
            <Button danger>Fish</Button>
            <Button danger>Meat</Button>
            <Button danger>Chicken</Button>
            <Button danger>Fast Food</Button>
            <Button danger>Drinks</Button>
         </Space>



         <div>

         </div>

      </div>
   );
};

export default Home;