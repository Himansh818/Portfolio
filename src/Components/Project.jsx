import React, { useRef } from "react";
import useIntersectionObserver from "./IntersectionObserve";

const Project = () => {
  
  return (
    <div className=" projects h-auto  w-full text-2xl flex flex-col justify-center items-center text-black ">
      <section className=" h-1/2 relative top-30 w-full flex flex-col gap-6 text-2xl text-white  ">
        <h1 className="text-7xl text-center font-extrabold ">Projects</h1>
        <ul className="flex gap-3 w-fit pl-4 pr-4 ml-[10vw] rounded">
          <li>
            <a
              className="font-bold text-sm hover:text-blue-500 cursor-pointer"
              href=""
            >
              All
            </a>
          </li>
          <li>
            <a
              className="font-bold text-sm hover:text-blue-500 cursor-pointer"
              href=""
            >
              AI
            </a>
          </li>
          <li>
            <a
              className="font-bold text-sm hover:text-blue-500 cursor-pointer"
              href=""
            >
              E-commerce
            </a>
          </li>
          <li>
            <a
              className="font-bold text-sm hover:text-blue-500 cursor-pointer"
              href=""
            >
              Game
            </a>
          </li>
        </ul>
      </section>

      <div className="projectsDiv flex flex-wrap py-10 gap-10 w-auto justify-around relative top-40 px-10">
        <div
        
          onClick={() =>
            window.open(
              "https://himansh818.github.io/Tic-Tac-Toe-Game/",
              "_blank"
            )
          }
          className="allProject flex justify-center items-center overflow-hidden flex-wrap  ease-in-out duration-150 hover:scale-105 h-80 w-96 bg-white/20 backdrop-blur-md shadow-md rounded-2xl border-2 border-white"
        >
          <img
            className=" hello rotate-y-180 h-full w-full bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREk0dxNniBqDp55HxX9FzkmaBCT7T3c9Xvw&s"
            alt=""
          />
        </div>
        <div
          
          onClick={() =>
            window.open(
              "https://himansh818.github.io/Tic-Tac-Toe-Game/",
              "_blank"
            )
          }
          className="allProject flex justify-center items-center overflow-hidden flex-wrap  ease-in-out duration-150 hover:scale-105 h-80 w-96 bg-white/20 backdrop-blur-md shadow-md rounded-2xl border-2 border-white"
        >
          <img
            className=" hello rotate-y-180 h-full w-full bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREk0dxNniBqDp55HxX9FzkmaBCT7T3c9Xvw&s"
            alt=""
          />
        </div>
        <div
          
          onClick={() =>
            window.open(
              "https://himansh818.github.io/Tic-Tac-Toe-Game/",
              "_blank"
            )
          }
          className="allProject flex justify-center items-center overflow-hidden flex-wrap  ease-in-out duration-150 hover:scale-105 h-80 w-96 bg-white/20 backdrop-blur-md shadow-md rounded-2xl border-2 border-white"
        >
          <img
            className=" hello rotate-y-180 h-full w-full bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREk0dxNniBqDp55HxX9FzkmaBCT7T3c9Xvw&s"
            alt=""
          />
        </div>
        <div
          
          onClick={() =>
            window.open(
              "https://himansh818.github.io/Tic-Tac-Toe-Game/",
              "_blank"
            )
          }
          className="allProject flex justify-center items-center overflow-hidden flex-wrap  ease-in-out duration-150 hover:scale-105 h-80 w-96 bg-white/20 backdrop-blur-md shadow-md rounded-2xl border-2 border-white"
        >
          <img
            className=" hello rotate-y-180 h-full w-full bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREk0dxNniBqDp55HxX9FzkmaBCT7T3c9Xvw&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
