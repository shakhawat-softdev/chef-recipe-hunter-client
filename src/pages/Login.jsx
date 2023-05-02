import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {
   const [message, setMessage] = useState('');
   const { sinInUser, signInGoogle } = useContext(AuthContext);
   const navigate = useNavigate()

   const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      sinInUser(email, password)
         .then(resut => {
            // const loggedUser = resut.user;
            setMessage('Login successful!');
            navigate('/')
         })
   };

   const handleGoogleLogin = () => {
      signInGoogle()
         .then(result => {
            const loggedUser = result.user;
            setMessage('Login successful!');
            navigate('/');
            console.log(loggedUser);
         })
         .catch(error => {
            setMessage(error.massage)
            console.error(error.massage)
         })
   }

   return (
      <>
         <div className='flex justify-center items-center'>
            <div >
               <h1 className="text-3xl font-bold my-3 ml-10">Login now!</h1>
               <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <span className="label-text-alt">{message}</span>
                        </label>
                     </div>
                     <div className="form-control mt-3">
                        <button className="btn btn-primary">Login</button>
                     </div>
                     <label className="label">
                        <p className='label-text-alt'>Haven't account? Please <Link to='/register'><span className="label-text-alt link link-hover">register</span></Link>
                        </p>
                     </label>
                     <button className="btn btn-ghost btn-success" onClick={handleGoogleLogin}>Login with Google</button>

                     <button className="btn btn-ghost btn-success">Login with Github</button>
                  </div>
               </form>
            </div>
         </div>



      </>
   );
};

export default Login;