import { useState, useEffect } from "react";
import { projects } from "../constants/projects";


const Projects = () => {
  const [project, setProject] = useState();

  return (
    <div className="flex flex-row h-full">
      <aside className="w-[15%] h-full border-r-2 overflow-y-auto bg-black">
        <button onClick={() => setProject()}
          className={`w-full text-start  text-sm px-4 p-1 whitespace-nowrap
            ${!project ? 'bg-white text-black font-medium' : 'bg-black text-white'}  
          `}
        >All Projects</button>
        {
          projects.map((prj, index) => {
            return (
              <button key={index} onClick={() => setProject(prj)}
                className={`w-full text-start  text-sm px-4 p-1 whitespace-nowrap truncate
                  ${prj.name === project?.name ? 'bg-white text-black font-medium' : 'bg-black text-white'}  
                `}
              >
                {prj.name}
              </button>
            )
          })
        }
      </aside>
      <main className="w-full overflow-y-auto">
        {!project &&
          <div className="grid grid-cols-3">
            {projects.map((prj, index) => {
              return (
                <div key={index} className=" 
                  p-2 border m-4 bg-black hover:custom-shadow duration-200 hover:cursor-pointer
                   hover:bg-white hover:text-black"
                >
                  {prj.name}
                </div>
              )
            })}
          </div>
        }

        <div>
          <img src={project?.urls.image} alt={project?.name} />
        </div>
      </main>
    </div>
  )
}
export default Projects;