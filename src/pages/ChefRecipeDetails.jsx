import React from 'react';
import banner from '../../public/images/banner.jpg'
import { useLoaderData } from 'react-router-dom';

const ChefRecipeDetails = () => {
   const [chef] = useLoaderData();
   console.log(chef);
   const { chefName, chefImg, experience, totalLikes, numberOfRecipe, chefInfo, signatureRecipes, recipeDetails } = chef;
   const { recipeImg, description, ingredients } = recipeDetails;


   return (
      <>
         <section>
            <div className="card  lg:card-side bg-base-100 shadow-xl m-10">
               <figure><img src={chefImg} /></figure>
               <div className="card-body">
                  <h2 className="card-title">{chefName} </h2>
                  <div>
                     <h2 className=""> Chef Details: {chefInfo} </h2>
                     <p>Years of experience: {experience} </p>
                     <p>Numbers of recipes: {numberOfRecipe} </p>
                     <p>Likes: {totalLikes} </p>

                  </div>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary">Listen</button>
                  </div>
               </div>
            </div>
         </section>


         <section >
            <div className="card w-1/2 bg-base-100 shadow-xl">
               <div className="card-body">
                  <figure><img src={recipeImg} /></figure>
                  <h2 className="card-title">{signatureRecipes}</h2>
                  <p><span className='font-semibold'>Description:</span> {description}</p>
                  <p><span className='font-semibold'>Ingredients:</span> {ingredients}</p>
               </div>
            </div>
         </section>

      </>
   );
};

export default ChefRecipeDetails;