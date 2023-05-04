import React from 'react';

const RecepiImgCard = ({ data }) => {
   const { recipeDetails } = data
   console.log(recipeDetails);
   return (
      <div className="card w-70 card-compact bg-base-100 shadow-sm border-2">
         <figure><img src={recipeDetails.recipeImg} /></figure>
         <div className="card-body">
            <h2 className="card-title">{recipeDetails.recipeName}</h2>
            <p><small>{recipeDetails.description}</small></p>
            <p>Price: 95/-</p>


         </div>
      </div>
   );
};

export default RecepiImgCard;