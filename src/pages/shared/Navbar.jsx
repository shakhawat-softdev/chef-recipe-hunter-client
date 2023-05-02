import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="navbar bg-blue-100 w-full max-w-7xl mx-auto">
         <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Chef Mster</a>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <Link to='/'> <li><a>Home</a></li></Link>
               <Link to='/'> <li><a>Blog</a></li></Link>
               <Link to='/login'> <li><a>Login</a></li></Link>
               <Link to='/register'> <li><a>Registerr</a></li></Link>
               <Link to='/'> <li><a>Logout</a></li></Link>

               <li tabIndex={0}>
                  <a>
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                     </label>
                  </a>
                  <ul className="p-2 bg-base-100">
                     <li><a>User Name</a></li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;