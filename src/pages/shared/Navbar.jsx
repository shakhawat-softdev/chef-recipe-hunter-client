import React from 'react';

const Navbar = () => {
   return (
      <div className="navbar bg-blue-100">
         <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Chef Mster</a>
         </div>

         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <li><a>Home</a></li>
               <li tabIndex={0}>
                  <a>
                     Parent
                     <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                  </a>
                  <ul className="p-2 bg-base-100">
                     <li><a>Submenu 1</a></li>
                     <li><a>Submenu 2</a></li>
                  </ul>
               </li>
               <li><a>Item 3</a></li>
               <li><a>Login</a></li>
            </ul>
         </div>



         <div className="flex-none gap-2">
            <div className="form-control">
               {/* <input type="text" placeholder="Search" className="input input-bordered" /> */}

            </div>
            <div className="dropdown dropdown-end">
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </label>
               <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                     <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                     </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;