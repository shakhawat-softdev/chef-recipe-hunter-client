import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ChefRecipeDetails from "../pages/ChefRecipeDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";


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
            element: <PrivateRoute><ChefRecipeDetails /></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'register',
            element: <Register />
         }

      ]
   }
])

export default router;