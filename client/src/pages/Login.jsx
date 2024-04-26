// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const userLocalStorage = JSON.parse(localStorage.getItem("users"));

    if (userData.email !== userLocalStorage.email)
      return alert("Please register!");

    if (userData.password !== userLocalStorage.password)
      return alert("wrong password!");
 // user redierct to home page
    return navigate("/");
  };

  return (
    <div>
      <h2 className="text-pink-400 hover:uppercase hover:text-blue-500">
        Login
      </h2>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="border"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="border"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button className="border p-2 w-32" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
