import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ChefRecipeDetails from "../pages/ChefRecipeDetails";


const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [

         {
            path: '/',
            element: <Home />,
            loader: () => fetch('http://localhost:5000/chefs')
         },
         {
            path: 'details/:id',
            element: <ChefRecipeDetails />,
            loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
         }

      ]
   }
])

export default router;