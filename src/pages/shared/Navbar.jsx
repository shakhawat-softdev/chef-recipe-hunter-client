import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {



   return (
      <div className="navbar bg-blue-100 w-full max-w-7xl mx-auto">
         <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Chef Master</a>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <Link to='/' className='btn'> Home</Link>
               <Link to='/' className='btn'> Blog</Link>
               <Link to='/login' className='btn'> Login</Link>
               <Link to='/register' className='btn'> Registerr</Link>
               <Link to='/' className='btn'>Logout</Link>

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