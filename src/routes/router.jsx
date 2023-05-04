import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ChefRecipeDetails from "../pages/ChefRecipeDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [

         {
            path: '/',
            element: <Home />,

            loader: () => fetch('https://chef-recipe-hunter-server-side-syedarafatcse.vercel.app/chefs')
         },
         {
            path: 'details/:id',
            element: <PrivateRoute><ChefRecipeDetails /></PrivateRoute>,
            loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-side-syedarafatcse.vercel.app/details/${params.id}`)
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'register',
            element: <Register />
         },
         {
            path: 'blog',
            element: <Blog />
         }

      ]
   }
])

export default router;