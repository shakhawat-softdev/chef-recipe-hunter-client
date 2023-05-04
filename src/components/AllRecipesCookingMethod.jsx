import React, { useState } from 'react';
import { Button } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import { StarIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/solid'


const AllRecipesCookingMethod = ({ chef }) => {



   const { recipes } = chef;
   const rating = chef.recipeDetails.ratings;

   const recepiName = recipes.map(recepi => (recepi.name))
   const ingredients = recipes.map(recepi => (recepi.ingredients))
   const ingredientsDetails = ingredients.map(i => (i))

   const recepiName1 = recepiName[0]
   const recepiName2 = recepiName[1]
   const recepiName3 = recepiName[2]
   const recepiName4 = recepiName[3]
   const recepiName5 = recepiName[4]

   const ingredient1 = ingredientsDetails[0]
   const ingredient2 = ingredientsDetails[1]
   const ingredient3 = ingredientsDetails[2]
   const ingredient4 = ingredientsDetails[3]
   const ingredient5 = ingredientsDetails[4]

   const cookingMethod = chef.cooking_methods;

   const [showBtn, setShowBtn] = useState(true)
   const notify = () => {
      toast('Added to Favourite!!');
      setShowBtn(false);

   };

   return (
      <>

         <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
               <p className='font-bold'>Total Recipes: {recipes.length} </p>
               <div className="card-title bg-slate-300 p-4 rounded-md">All Recipes: {recipes.map((recepi, index) => <p key={index}><small>{recepi.name}</small></p>)} </div>

               <div className='grid grid-cols-3 gap-3'>
                  <div className='bg-gray-200 p-4 rounded'>
                     <div className='mb-3'> <h1 className='font-bold inline '>1. Recipe name:</h1> {recepiName1} </div>
                     <div><h1 className='font-bold inline'>ingredients:</h1> {ingredient1.map(procedure => procedure)} </div>
                  </div>

                  <div className='bg-gray-200 p-4 rounded'>
                     <div className='mb-3' > <h1 className='font-bold inline'>2. Recipe name:</h1> {recepiName2} </div>
                     <div><h1 className='font-bold inline'>ingredients:</h1> {ingredient2.map(procedure => procedure)} </div>
                  </div>

                  <div className='bg-gray-200 p-4 rounded'>
                     <div className='mb-3'> <h1 className='font-bold inline'>3. Recipe name:</h1> {recepiName3} </div>
                     <div><h1 className='font-bold inline'>ingredients:</h1> {ingredient3.map(procedure => procedure)} </div>
                  </div>

                  <div className='bg-gray-200 p-4 rounded'>
                     <div className='mb-3'> <h1 className='font-bold inline'>4. Recipe name:</h1> {recepiName4} </div>
                     <div><h1 className='font-bold inline'>ingredients:</h1> {ingredient4.map(procedure => procedure)} </div>
                  </div>

                  <div className='bg-gray-200 p-4 rounded'>
                     <div className='mb-3'> <h1 className='font-bold inline'>4. Recipes name:</h1> {recepiName5} </div>
                     <div><h1 className='font-bold inline'>ingredients:</h1> {ingredient5.map(procedure => procedure)} </div>
                  </div>
               </div>
               <div className='bg-green-500 p-3 rounded' > <div className='font-bold inline'>Cooking method:</div> {cookingMethod.map((details, index) => <div key={index}>{details}</div>)} </div>

               <div>
                  <div className='flex justify-start items-center'>
                     <h1 className='font-bold inline '>{rating}</h1>
                     <StarIcon className='h-5 w-5 text-yellow-300 ' />
                     <StarIcon className='h-5 w-5 text-yellow-300' />
                     <StarIcon className='h-5 w-5 text-yellow-300' />
                     <StarIcon className='h-5 w-5 text-yellow-300' />
                  </div>

                  <Button danger className='w-1/6 my-2 ' disabled={!showBtn} onClick={notify} > <BookmarkIcon className='h-5 w-5 inline mr-1' /> Add to favorite</Button>

               </div>
            </div>
         </div >
         <Toaster />
      </>
   );
};

export default AllRecipesCookingMethod;