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
   // console.log(allChefs);
   return (
      <div className='w-full max-w-7xl mx-auto'>
         <section>

            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})`, height: '500px' }}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                     <h1 className="mb-5 text-5xl font-bold">Meat Chicken</h1>
                     <p className="mb-5">Meet our master chef, who combines traditional techniques with modern flavors to create culinary magic.</p>
                     {/* <button class="btn btn-primary">Get Started</button> */}
                  </div>
               </div>
            </div>
         </section>
         {/* Section-1 Banner-1 End*/}
         <hr />
         {/* Section-2 Banner-2 Start*/}
         <section className='flex flex-col justify-center items-center'>
            <div className='w-full lg:flex flex flex-col justify-center items-center'>
               <div className='w-1/2'>
                  <img className='h-5/6' src={banner3} alt="" />
               </div>
               <div className='w-1/2'>
                  <div className="card bg-base-100 ">
                     <div className="card-body lg:items-center text-center">

                        <div className="card-title "><h1 className='text-3xl' ><span >Our Chef</span> <span className='font-bold'>Specialties</span></h1></div>

                        <p className='mt-4'><small>Our website is dedicated to celebrating the art and craft of cooking and the talented chefs who create culinary masterpieces. From classic French cuisine to contemporary fusion dishes, we showcase the work of chefs from all over the world, offering insights into their unique styles, techniques, and philosophies. Our articles, interviews, and recipes inspire food lovers of all levels to explore new flavors and experiment in the kitchen. Whether you're a professional chef or a home cook, our website is the ultimate destination for discovering the joys of gastronomy.</small></p>
                     </div>
                     <hr className='border ' />
                  </div>

                  <div className='flex flex-col lg:flex-row gap-2 mt-5 justify-center items-center '>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body '>
                           <h2 className='card-title'>Tacos  </h2>

                        </div>
                     </div>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body '>
                           <h2 className='card-title'>Chiles  </h2>

                        </div>
                     </div>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body '>
                           <h2 className='card-title'>Guacamole</h2>

                        </div>
                     </div>
                     <div className='card shadow-md border border-red-300'>
                        <div className='card-body '>
                           <h2 className='card-title'>Enchiladas</h2>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Space wrap className='flex justify-center items-start mx-1 mt-4'>
            <Button type="primary" danger>All</Button>
            <Button danger>Fish</Button>
            <Button danger>Meat</Button>
            <Button danger>Chicken</Button>
            <Button danger>Fast Food</Button>
            <Button danger>Drinks</Button>
         </Space>
         {/* Section-2 Banner-2 End*/}


         {/* Section-3 All Ches Start*/}
         <section>
            <div className="card-title mt-10"><h1 className='text-3xl mx-auto text-center' ><span >Our Available</span> <span className='font-bold'>Chefs</span></h1></div>
            <div className='grid grid-cols-3 gap-2'>
               {allChefs.map(chef => <ChefCard chef={chef} key={chef.id} />)}
            </div>
         </section>
         {/* Section-3 All Ches End*/}

         <section>
            <h1 className='text-center text-2xl bg-slate-200 text-black my-5 p-5 rounded-md '>Meet our master chef, who combines traditional techniques with modern flavors to create culinary magic.</h1>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-10'>
               <div className='w-1/2'>
                  <div className="card bg-base-100 ">
                     <div className="card-body items-center text-center">
                        <div className="card-title "><h1 className='text-3xl' ><span >Event</span> <span className='font-bold'>package </span></h1></div>
                        <p className='mt-4'><small>At our restaurant, we pride ourselves on providing exceptional service to every guest who walks through our doors. From the moment you arrive, our friendly and professional staff will make you feel welcome and ensure that your dining experience is nothing short of outstanding.</small></p>
                        <p><small>Our attentive waitstaff will guide you through our menu, answering any questions you may have and making recommendations based on your preferences. They'll take your order promptly and accurately, ensuring that any special requests or dietary restrictions are accommodated.</small></p>
                     </div>
                     <div className="divider"></div>
                  </div>
                  <div className='flex flex-col lg:flex-row gap-2 w-full mt-5 justify-center items-center'>
                     <div className='card shadow-lg'>
                        <div className='card-body '>
                           <h2 className='card-title'>Date Night Package </h2>

                        </div>
                     </div>
                     <div className='card shadow-lg'>
                        <div className='card-body '>
                           <h2 className='card-title'>Family Feast Package </h2>

                        </div>
                     </div>
                     <div className='card shadow-lg'>
                        <div className='card-body '>
                           <h2 className='card-title'>Happy Hour Package</h2>

                        </div>
                     </div>
                     <div className='card shadow-lg'>
                        <div className='card-body '>
                           <h2 className='card-title'>Catering Package </h2>

                        </div>
                     </div>
                  </div>
               </div>
               <div className='w-3/5'>
                  <img className='h-5/6' src={place} alt="" />
               </div>
            </div>
         </section>


         <section className='mb-10'>
            <div className="card-title mt-10"><h1 className='text-3xl mx-auto text-center' ><span >Our Available</span> <span className='font-bold'>Signature Items</span></h1></div>
            <div className="divider mb-6"></div>
            <div className='grid grid-cols-4 gap-2'>

               {allChefs.map(data => <RecepiImgCard data={data} key={data.id} />)}

            </div>
         </section>
      </div>
   );
};

export default Home;