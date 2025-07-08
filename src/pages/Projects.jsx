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
          <div>
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Languages</th>
                  <th scope="col">Techstacks</th>
                  <th scope="col">Year</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((prj, index) => {
                  return (
                    <tr key={index} className=" 
                      p-2 bg-black hover:custom-shadow duration-200 hover:cursor-pointer
                      hover:bg-white hover:text-black"
                    >
                      <td>{prj.name}</td>
                      <td>{prj.type}</td>
                      <td>{prj.tags.languages}</td>
                      <td>{prj.tags.techstacks}</td>
                      <td>{prj.year}</td>
                      <td>{prj.status}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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