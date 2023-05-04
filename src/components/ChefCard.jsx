import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';



const ChefCard = ({ chef }) => {
   // console.log(chef);

   const { chefName, chefImg, experience, totalLikes, numberOfRecipe } = chef;

   return (

      <div className="card w-46  bg-base-100 shadow-md border">
         <figure className="px-10 pt-10">
            <LazyLoad height={300} offset={300}>
               <img src={chefImg} />
            </LazyLoad>

            {/* <img src={chefImg} /> */}
         </figure>
         <div className="card-body">
            <h2 className="card-title">{chefName} </h2>
            <p>Years of experience: {experience} </p>
            <p>Numbers of recipes: {numberOfRecipe} </p>
            <p>Likes: {totalLikes} </p>
            {/* <Link to='details'>
               <Button type="primary" danger>View Recipes</Button>
            </Link> */}

            <Link to={`/details/${chef.id}`}>
               <Button type="primary" danger>View Recipes</Button>
            </Link>

            {/* <div className="card-actions">
               <button className="btn btn-primary">View Recipes</button>
               <Button type="primary">View Recipes</Button>
            </div> */}
         </div>
      </div>




   );
};

export default ChefCard;