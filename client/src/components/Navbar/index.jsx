// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-3 border-b py-4 justify-between  container bg-zinc-400  ">
      <div className="font-bold text-xl">Logo</div>
      <ul className="flex gap-7 items-center ">
        <li>
          <Link className="hover:underline  hover:text-pink-400 animate-ping hover:animate-none" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline hover:text-pink-400  animate-ping hover:animate-none" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="hover:underline  hover:text-pink-400 animate-ping hover:animate-none" to="/register">
            Register
          </Link>
          <Link className="hover:underline  hover:text-pink-400 ">Proflie</Link>
        </li>
      </ul>
    </nav>
  );
}
