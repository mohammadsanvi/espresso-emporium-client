import { Underline } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/7Yshw4D6/15.jpg')] px-4 bg-cover bg-center h-32 flex items-center justify-around">
      <Link to="/">
         <div className="flex gap-4 items-center">
        
         <img
            className="w-16 h-20"
            src="https://i.postimg.cc/zDpXFNyj/logo1.png"
            alt="logo"
          />
        <h2 className="text-white text-2xl md:text-2xl lg:text-3xl">
          Espresso Emporium
        </h2>
      </div>
        </Link>
      
      <div className="text-white flex gap-5 text-sm md:text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-2 border-white rounded-md p-2" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "border-2 border-white rounded-md p-2" : ""
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "border-2 border-white rounded-md p-2" : ""
          }
        >
          Users Management
        </NavLink>
      </div>
      <div className="text-white text-sm md:text-xl ml-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "border-2 border-white rounded-md p-2" : ""
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
