import React from 'react';

const Footer = () => {
   return (
      <div>
         <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
               <span className="footer-title">Foods</span>
               <a className="link link-hover">Chicken</a>
               <a className="link link-hover">Drinks</a>
               <a className="link link-hover">Fish</a>
               <a className="link link-hover">Fast Foods</a>
            </div>
            <div>
               <span className="footer-title">Order</span>
               <a className="link link-hover">Packge</a>
               <a className="link link-hover">Contact</a>
               <a className="link link-hover">Less price</a>
               <a className="link link-hover">Press kit</a>
            </div>
            <div>
               <span className="footer-title">Avialable Bookink</span>
               <a className="link link-hover">Chep Price</a>
               <a className="link link-hover">Review</a>
               <a className="link link-hover">Our Partnership</a>
            </div>
            <div>
               <span className="footer-title">Chef Master BD</span>
               <div className="form-control w-80">
                  <label className="label">
                     <span className="label-text">Enter your email address</span>
                  </label>
                  <div className="relative">
                     <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                     <button className="btn btn-error absolute top-0 right-0 rounded-l-none">Subscribe</button>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;