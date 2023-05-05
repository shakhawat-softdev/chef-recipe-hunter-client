import React from 'react';
import banner from '../../public/images/banner.jpg'
import banner1 from '../../public/images/banner1.jpg'
import banner3 from '../../public/images/banner3.jpg'
import place from '../../public/images/place.png';
import { useLoaderData } from 'react-router-dom';
import { Button, Space } from 'antd';
import ChefCard from '../components/ChefCard';
import RecepiImgCard from '../components/RecepiImgCard';


const Home = () => {
   const allChefs = useLoaderData()

   return (
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

         <section>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})`, height: '500px' }}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                     <h1 className="mb-5 text-5xl font-bold">Meat Chicken</h1>
                     <p className="mb-5">Meet our master chef, who combines traditional techniques with modern flavors to create culinary magic.</p>

                  </div>
               </div>
            </div>
         </section>
         <hr />

         <section className='m-auto my-5'>
            <div className='w-full'>
               <div className='w-full border '>
                  <figure><img className='w-2/5 mx-auto' src={banner3} alt="Picture" /></figure>
               </div>

               <div className='text-center '>
                  <h1 className='text-3xl mt-3' ><span >Our Chef</span><span className='font-bold'> Specialties</span></h1>
                  <h3 className='leading-3 lg:leading-5'><small>Our website is dedicated to celebrating the art and craft of cooking and the talented chefs who create culinary masterpieces. From classic French cuisine to contemporary fusion dishes, we showcase the work of chefs from all over the world, offering insights into their unique styles, techniques, and philosophies. Our articles, interviews, and recipes inspire food lovers of all levels to explore new flavors and experiment in the kitchen. Whether you're a professional chef or a home cook, our website is the ultimate destination for discovering the joys of gastronomy.</small></h3>
               </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>
               <div className='card shadow-md border border-red-300'>
                  <div className='card-body items-center text-center '>
                     <h2 className='card-title text-center'>Tacos  </h2>

                  </div>
               </div>
               <div className='card shadow-md border border-red-300'>
                  <div className='card-body items-center text-center'>
                     <h2 className='card-title'>Chiles  </h2>

                  </div>
               </div>
               <div className='card shadow-md border border-red-300'>
                  <div className='card-body items-center text-center'>
                     <h2 className='card-title'>Guacamole</h2>

                  </div>
               </div>
               <div className='card shadow-md border border-red-300'>
                  <div className='card-body items-center text-center '>
                     <h2 className='card-title'>Enchiladas</h2>

                  </div>
               </div>
            </div>
         </section >

         <Space wrap className='flex justify-center items-start mx-1 mt-4'>
            <Button type="primary" danger>All</Button>
            <Button danger>Fish</Button>
            <Button danger>Meat</Button>
            <Button danger>Chicken</Button>
            <Button danger>Fast Food</Button>
            <Button danger>Drinks</Button>
         </Space>


         <section>
            <div className="card-title mt-10">
               <h1 className='text-3xl mx-auto text-center' ><span >Our Available</span> <span className='font-bold'>Chefs</span></h1>
            </div>
            <div className="divider"></div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
               {allChefs.map(chef => <ChefCard chef={chef} key={chef.id} />)}
            </div>

         </section>

         <div className="divider mb-3 lg:mb-6"></div>

         <section className='m-auto my-5'>
            <div className='w-full lg:flex flex-row-reverse gap-5'>
               <div className='w-full text-center '>
                  <figure><img className=' mx-auto' src={place} alt="Picture" /></figure>
               </div>

               <div className=' bg-slate-100 mt-3 lg:mt-0 lg:p-5 rounded-md boder border-red-200'>
                  <div className='text-center  '>
                     <h1 className='text-3xl lg:mt-3' ><span >Event</span><span className='font-bold'> package</span></h1>
                     <div className="divider mb-3 lg:mb-6"></div>
                     <h3 className='leading-3 lg:leading-5'><small>Our website is dedicated to celebrating the art and craft of cooking and the talented chefs who create culinary masterpieces. From classic French cuisine to contemporary fusion dishes, we showcase the work of chefs from all over the world, offering insights into their unique styles, techniques, and philosophies. Our articles, interviews, and recipes inspire food lovers of all levels to explore new flavors and experiment in the kitchen. Whether you're a professional chef or a home cook, our website is the ultimate destination for discovering the joys of gastronomy.</small></h3>
                  </div>

                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body items-center text-center '>
                           <h2 className='card-title text-center'>Date Night Package  </h2>

                        </div>
                     </div>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body items-center text-center'>
                           <h2 className='card-title'>Family Feast Package</h2>

                        </div>
                     </div>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body items-center text-center'>
                           <h2 className='card-title'>Happy Hour Package</h2>

                        </div>
                     </div>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body items-center text-center '>
                           <h2 className='card-title'>Catering Package</h2>

                        </div>
                     </div>
                  </div>
               </div>

            </div>


         </section >


         <section className='mb-10'>
            <div className="card-title mt-10"><h1 className='text-3xl mx-auto text-center' ><span >Our Available</span> <span className='font-bold'>Signature Items</span></h1></div>
            <div className="divider mb-6"></div>
            <div className='lg:grid grid-cols-4 gap-2'>
               {allChefs.map(data => <RecepiImgCard data={data} key={data.id} />)}
            </div>
         </section>

      </div >
   );
};

export default Home;