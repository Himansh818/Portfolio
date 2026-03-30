import "../ComponentsCss/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white/15 backdrop-blur-md shadow-md px-10 w-full rounded-2xl fixed flex justify-around items-center text-white gap-10">
      <div className="col-1">
        <h2 className="text-white text-3xl font-extrabold hover:scale-125 transition-all">HPortfolio</h2>
      </div>
      <div className="col-2 flex gap-5 items-center font-bold">
        <Link className="link hover:text-cyan-600 hover:scale-105 transition-all" to="/">
          Home
        </Link>
        <Link className="link hover:text-cyan-600 hover:scale-105 transition-all" to="/projects">
          Projects
        </Link>
        <Link
          className="h-10 w-10 rounded-full hover:bg-white flex justify-center items-center hover:scale-125 transition-all
             bg-white/20 backdrop-blur-md shadow-md overflow-hidden"
          to="/projects"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSBKCYtG2gN8eIVMeZ49UsTfvcISsTyAASw&s"
            alt="image"
            className="h-full w-full object-cover hover:scale-105"
          />
        </Link>

        <Link
          className="connectBtn rounded-2xl p-5 bg-white/20 backdrop-blur-md shadow-md hover:bg-white hover:text-cyan-600"
          to="/projects"
        >
          Let's connect
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
