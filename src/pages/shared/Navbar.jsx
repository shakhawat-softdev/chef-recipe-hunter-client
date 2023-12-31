import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
   const { user, logout } = useContext(AuthContext)

   const handleLogout = () => {
      logout()
         .then(result => { })
         .catch()
   }

   return (
      <div className="navbar bg-blue-100 w-full max-w-7xl mx-auto">
         <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl lg:text-xl">Chef Master</a>
         </div>
         <div className="flex-none">
            <ul className=" menu menu-horizontal px-1 flex justify-center items-center gap-2">
               {user &&
                  <> <li tabIndex={0}>
                     <a>
                        <label tabIndex={0} className="avatar">
                           <div className="w-6 rounded-full">
                              <img src={user && user.photoURL} />
                           </div>
                        </label>
                     </a>

                     <ul className="text-sm bg-base-100 ">
                        <li className=''><a><small>{user && user.displayName}</small></a></li>
                     </ul>
                  </li>
                  </>}

               <NavLink
                  to='/' className={({ isActive }) => (isActive ? 'btn btn-active btn-link decoration-blue-100 text-blue-800  ' : 'btn btn-active btn-link decoration-blue-100 text-black')}
               >
                  Home
               </NavLink>
               <NavLink
                  to='/blog' className={({ isActive }) => (isActive ? 'btn btn-active btn-link decoration-blue-100 text-blue-800  ' : 'btn btn-active btn-link decoration-blue-100 text-black')}
               >
                  Blog
               </NavLink>



               {user ? <NavLink to='/' className='btn btn-active btn-link decoration-blue-100 text-black' onClick={handleLogout} >Logout</NavLink> :

                  <NavLink to='/login' className={({ isActive }) => (isActive ? 'btn btn-active btn-link decoration-blue-100 text-blue-800  ' : 'btn btn-active btn-link decoration-blue-100 text-black')}> Login</NavLink>}

            </ul>
         </div>
      </div>
   );
};

export default Navbar;