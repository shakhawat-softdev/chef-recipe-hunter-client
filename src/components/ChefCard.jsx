import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { FcLike } from 'react-icons/fc';



const ChefCard = ({ chef }) => {
   // console.log(chef);

   const { chefName, chefImg, experience, totalLikes, numberOfRecipe } = chef;

   return (

      <div className="card w-3/4 bg-base-100 shadow-md border mx-auto">
         <figure className="p-3 lg:p-5">
            <LazyLoad height={300} offset={300}>
               <img src={chefImg} />
            </LazyLoad>

         </figure>
         <div className="flex flex-col justify-center items-center mb-5">
            <h2 className="card-title mt-2">{chefName} </h2>
            <p className='m-0'><span className='font-semibold'>Years of experience:</span> {experience} </p>
            <p className='m-0'><span className='font-semibold'>Numbers of recipes:</span> {numberOfRecipe} </p>
            <p className='mb-2 flex justify-center items-center gap-1'><span className='font-semibold'>Likes:</span> {totalLikes} <FcLike /> </p>
            <Link to={`/details/${chef.id}`}>
               <Button type="primary" danger>View Recipes</Button>
            </Link>
         </div>
      </div>




   );
};

export default ChefCard;