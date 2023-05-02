import React from 'react';
import { Button, Checkbox, Form, Input, } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
   console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
   console.log('Failed:', errorInfo);
};

const Login = () => {
   return (
      <>
         <div className='flex justify-center items-center'>
            <div >
               <h1 className="text-3xl font-bold my-3 ml-10">Login now!</h1>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <span className="label-text-alt">Error message</span>
                        </label>
                     </div>
                     <div className="form-control mt-3">
                        <button className="btn btn-primary">Login</button>
                     </div>
                     <label className="label">
                        <p className='label-text-alt'>Haven't account? Please <Link to='/register'><span className="label-text-alt link link-hover">register</span></Link>
                        </p>
                     </label>
                     <button className="btn btn-ghost btn-success">Login with Google</button>
                     <button className="btn btn-ghost btn-success">Login with Github</button>
                  </div>
               </div>
            </div>
         </div>



      </>
   );
};

export default Login;