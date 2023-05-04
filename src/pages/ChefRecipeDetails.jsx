import React from 'react';
import banner from '../../public/images/banner.jpg'
import { useLoaderData } from 'react-router-dom';



import AllRecipesCookingMethod from '../components/AllRecipesCookingMethod';


const ChefRecipeDetails = () => {
   const [chef] = useLoaderData();

   console.log(chef)

   const { chefName, chefImg, experience, totalLikes, numberOfRecipe, chefInfo, signatureRecipes, recipeDetails } = chef;
   const { recipeImg, description, ingredients } = recipeDetails;


   return (
      <>
         <section>


            <div className="card lg:card-side bg-base-100 shadow-md border border-x-red-300 m-10 p-5">
               <figure><img className='w-2/3' src={chefImg} /></figure>
               <div className="card-body">
                  <h2 className="card-title">{chefName} </h2>
                  <div>
                     <h2 className=""> <span className='font-bold'>Chef Details:</span> {chefInfo} </h2>
                     <p><span className='font-bold'>Years of experience:</span> {experience} </p>
                     <p><span className='font-bold'>Numbers of recipes:</span> {numberOfRecipe} </p>
                     <p><span className='font-bold'>Likes:</span> {totalLikes} </p>

                  </div>
                  <div className="card-actions justify-end">
                     {/* <button className="btn btn-primary">Listen</button> */}
                  </div>
               </div>
            </div>
         </section>

         <section>
            <AllRecipesCookingMethod chef={chef} />
         </section>



      </>
   );
};

export default ChefRecipeDetails;