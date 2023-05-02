import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
   const { user, logout } = useContext(AuthContext);
   const [userInfo, setUserInfo] = useState(null);

   useEffect(() => {
      setUserInfo(user)
   }, [user])




   // console.log(userInfo);

   const handleLogout = () => {
      logout()
         .then(result => { })
         .catch()
   }



   return (
      <div className="navbar bg-blue-100 w-full max-w-7xl mx-auto">
         <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Chef Master</a>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <Link to='/' className='btn'> Home</Link>
               <Link to='/' className='btn'> Blog</Link>
               {user ? <Link to='/' className='btn' onClick={handleLogout} >Logout</Link> : <Link to='/login' className='btn'> Login</Link>}



               <li tabIndex={0}>
                  <a>
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                     </label>
                  </a>
                  <ul className="p-2 bg-base-100">
                     <li><a>{user && user.email}</a></li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;