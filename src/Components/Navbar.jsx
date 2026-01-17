import "../ComponentsCss/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white/15 backdrop-blur-md shadow-md px-10 w-full rounded-2xl fixed flex justify-around items-center text-white gap-10">
      <div className="col-1">
        <h2 className="text-white text-3xl font-extrabold">HPortfolio</h2>
      </div>
      <div className="col-2 flex gap-5 items-center font-bold">
        <Link className="link hover:text-cyan-600" to="/">
          Home
        </Link>
        <Link className="link hover:text-cyan-600" to="/projects">
          Projects
        </Link>
        <Link className="link h-10 w-10 rounded-full hover:bg-white flex justify-center items-center bg-white/20 backdrop-blur-md shadow-md" to="/projects">
          <img src="/logo.jpg" alt="image" className="bg-cover" />
        </Link>
        
        <Link className="connectBtn rounded-2xl p-5 bg-white/20 backdrop-blur-md shadow-md hover:bg-white hover:text-cyan-600" to="/projects">
          Let's connect 
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
