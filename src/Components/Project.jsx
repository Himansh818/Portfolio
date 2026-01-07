
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
        > <p className="flex font-extrabold text-white absolute hover:flex-none">Tic Tac Toe</p>
          <img
            className=" hello rotate-y-180 h-full w-full bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREk0dxNniBqDp55HxX9FzkmaBCT7T3c9Xvw&s"
            alt="Tic-Tac-Toe--Game"
          />
        </div>
        <div
          
          onClick={() =>
            window.open(
              "https://todolist-kohl-pi-97.vercel.app/",
              "_blank"
            )
          }
          className="allProject flex justify-center items-center overflow-hidden flex-wrap  ease-in-out duration-150 hover:scale-105 h-80 w-96 bg-white/20 backdrop-blur-md shadow-md rounded-2xl border-2 border-white"
        > <p className="flex font-extrabold text-white absolute hover:flex-none">Task Management</p>
          <img
            className=" hello rotate-y-180 h-full w-full bg-cover"
            src="data:image/jpeg;base64,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"
            alt="TO-DO-LIST"
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
