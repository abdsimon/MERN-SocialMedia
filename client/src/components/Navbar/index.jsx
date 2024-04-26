// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-3 border-b py-4 justify-between  container  ">
      <div className="font-bold text-xl">Logo</div>
      <ul className="flex gap-7 items-center ">
        <li>
          <Link className="hover:underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
