import React from 'react';
import { Button, Checkbox, Form, Input, } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <>
         <div className='flex justify-center items-center'>
            <div >
               <h1 className="text-3xl font-bold my-3 ml-10">Register now!</h1>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo Url" className="input input-bordered" />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                     <label className="label">
                        <span className="label-text-alt">Error message</span>
                     </label>
                     <label className="label">
                        <div className='label-text-alt'>
                           Alreadey have account?  <Link to='/login'><span className="label-text-alt link link-hover"> Please login</span></Link>
                        </div>
                     </label>
                  </div>
               </div>
            </div>
         </div>



      </>
   );
};

export default Register;