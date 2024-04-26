// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!e.target.avatar.value) return alert('Please add avatar!')
    if(!e.target.name.value) return alert('Please add name!')
    if(!e.target.email.value) return alert('Please add email!')
    if(!e.target.password.value) return alert('Please add password!')
    if(!e.target.confirmPassword.value) return alert('Please add confirm password!')

 
   const userData ={
  
     avatar: e.target.avatar.value,
     name: e.target.name.value,

     email: e.target.email.value,

     password: e.target.password.value,

     confirmPassword: e.target.confirmPassword.value,
     
   }

   console.log(userData)



   localStorage.setItem('users', JSON.stringify(userData))
   
  };

  return (
    <div>
      <h2 className="text-pink-400 hover:uppercase hover:text-blue-500">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div>
          <label htmlFor="name">Avatar:</label>
          <input className="border" name='avatar' type="avatar" id="avatar" required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input className="border" name='name'  type="name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="border"  name='email' type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="border" name='password' type="password" id="password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="border"
            type="password"
            id="confirmPassword"
            required
            name='confirmPassword'
          />
        </div>
        <button className="border p-2 w-32" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
