import { useState, useEffect } from "react";
import { projects } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";
import FlashlightWrapper from "../components/FlashlightWrapper";

const Projects = () => {

  return (
    <main>
      <FlashlightWrapper pattern="pattern" opacity={0.8}>
        <h1 className="text-4xl font-light text-center montserrat pt-20">Projects</h1>
        <p className="text-center text-blue-bell-800 quicksand font-medium mb-8 mt-2">{`Here is a collection of the projects I’ve developed.`}</p>
        <div className="flex flex-wrap px-20">
          {
            projects.map((project, index) => <div className="w-1/3 p-2 shrink-0"><ProjectCard project={project} key={index} /></div>)
          }
        </div>
      </FlashlightWrapper>
    </main>
  )
}
export default Projects;