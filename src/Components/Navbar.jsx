import React from "react";
import "../ComponentsCss/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mt-7 px-10 w-full rounded-2xl fixed h-10 flex justify-around items-center text-white gap-10">
      <div className="col-1">
        <h2 className="text-white text-3xl font-extrabold">HPortfolio</h2>
      </div>
      <div className="col-2 flex gap-5 items-center font-bold">
        <Link className="hover:text-cyan-600" to="/">
          Home
        </Link>
        <Link className="hover:text-cyan-600" to="/projects">
          Projects
        </Link>
        <Link className="h-10 w-10 rounded-full hover:bg-white flex justify-center items-center bg-white/20 backdrop-blur-md shadow-md" to="/projects">
          <img src="" alt="" className="" />
        </Link>
        
        <Link className="rounded-2xl p-5 bg-white/20 backdrop-blur-md shadow-md hover:bg-white hover:text-cyan-600" to="/projects">
          Let's connect 
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
