import { useEffect, useState, useRef } from "react";
import { getProjectPalettes } from "../constants/projects";

import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

import { phrase, intro, skills } from "../constants/strings";
import { languages, technologies } from "../constants/techstacks";
import { projects } from "../constants/projects";
import FlashlightWrapper from "../components/FlashlightWrapper";
import ProjectCard from "../components/ProjectCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import IconFont from "../components/IconFont";

const Home = () => {
  const year = new Date().getFullYear();
  const [paletteProjects, setPaletteProjects] = useState([]);

  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchPalettes = async () => {
      const data = await getProjectPalettes();
      setPaletteProjects(data);
    };

    fetchPalettes();
  }, []);

  return (
    <main>
      <FlashlightWrapper pattern="pattern" opacity={0.8}>
        <div className="relative pt-72">
          <div className="absolute top-40 left-0 w-full h-44 z-0">
            <div className="wave w-full h-44" />
            <div className="wave flipped-wave h-44 w-full" />
          </div>
          <div className="montserrat w-full relative z-10">
            <p className="text-7xl font-thin text-center">RICARDO ARON III</p>
            <p className="text-2xl font-light text-center mt-2">Full-Stack Developer</p>
            <p className="text-center mt-10 text-blue-bell-800 quicksand font-medium">{phrase}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mb-10 mt-20 py-10 px-30">
          <p className="text-justify text-xl">{intro}</p>

          <div className="flex flex-col justify-center items-end">
            <div className="flex gap-5">
              <a href="https://www.facebook.com/Pyromagne31826" target="_blank" rel="noopener noreferrer"><SiFacebook size={32} className="hover:scale-140 duration-300" /></a>
              <a href="https://www.instagram.com/pyromagne/" target="_blank" rel="noopener noreferrer"><SiInstagram size={32} className="hover:scale-140 duration-300" /></a>
              <a href="https://www.linkedin.com/in/ricardo-aron-23420330a/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={32} className="hover:scale-140 duration-300" /></a>
              <a href="https://github.com/Pyromagne" target="_blank" rel="noopener noreferrer"><SiGithub size={32} className="hover:scale-140 duration-300" /></a>
            </div>
            <p className="mt-4 font-medium">Connect with me</p>
          </div>
        </div>
      </FlashlightWrapper>

      <div className="blob-container">
        <div className="blobs">
          <div className="blob a"></div>
          <div className="blob b"></div>
          <div className="blob c"></div>
          <div className="blob d"></div>
        </div>
        <div className="flex quicksand">

          <div className="w-2/3 pl-30 pr-10 flex gap-10">
            {/* <p className="text-upright font-extrabold montserrat text-3xl tracking-tighter">TECHNOLOGIES</p> */}

            <div className="flex flex-col gap-4 w-full">
              <div className="overflow-hidden h-1/2 z-10">
                <div className="flex gap-4 w-full flex-wrap">
                  {technologies.map((tech, index) => <IconFont name={tech.icon} key={index} tooltip={tech.name} className="text-4xl hover:scale-105 duration-200 cursor-pointer" />)}
                </div>
                <p className="text-xl montserrat font-medium">Techstacks</p>
              </div>

              <div className="overflow-hidden h-1/2 z-10">
                <div className="flex gap-4 w-full flex-wrap">
                  {languages.map((lang, index) => <IconFont name={lang.icon} key={index} tooltip={lang.name} className="text-4xl hover:scale-105 duration-200 cursor-pointer" />)}
                  <i class="devicon-csharp-plain text-4xl hover:scale-105 duration-200 cursor-pointer" />
                  <i class="devicon-java-plain text-4xl hover:scale-105 duration-200 cursor-pointer" />
                </div>
                <p className="text-xl montserrat font-medium">Languages</p>
              </div>
            </div>
          </div>

          <div className="w-1/3 flex gap-8 pl-10 pr-30 justify-end">
            <div className="w-40 relative group h-fit">
              <div className="opacity-0 group-hover:opacity-100 duration-500" />
              <p className="text-6xl font-bold montserrat text-right">+{year - 2021}</p>
              <p className="victor-mono text-xl text-right">years of experience</p>
            </div>
            <div className="w-40 relative group h-fit">
              <div className="opacity-0 group-hover:opacity-100 duration-500" />
              <p className="text-6xl font-bold montserrat text-right">+{projects.length}</p>
              <p className="victor-mono text-xl text-right">projects completed</p>
            </div>
          </div>
        </div>

        <h2 className="text-center font-light text-3xl montserrat mt-20">Recent Projects</h2>
        <div className="relative px-20 mx-10">
          <div
            ref={scrollRef}
            className=" overflow-x-auto flex snap-x snap-mandatory w-full scroll-smooth overflow hide-scroll"
          >
            {projects.map((project, index) => {
              const projectPalette = paletteProjects.find((p) => p.name === project.name);
              const color = projectPalette?.palette?.Vibrant || "#ffffff";

              return (
                <div
                  key={index}
                  className="snap-center shrink-0 w-1/3 p-4"
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg z-10 border cursor-pointer"
          >
            <BiChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg z-10 border cursor-pointer"
          >
            <BiChevronRight size={24} />
          </button>
        </div>
      </div>


      <div>
        <h1 className="text-3xl montserrat text-center mt-20 font-light">Skills</h1>
        <div className="grid grid-cols-4 px-20 mt-10">
          {skills.map((skill, index) => <p key={index} className="truncate p-2 m-1 text-blue-bell-900 hover:text-text duration-200 hover:cursor-pointer" title={skill.description}>{skill.name}</p>)}
        </div>
      </div>
    </main>
  );
}

export default Home;