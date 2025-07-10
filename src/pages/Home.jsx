import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { phrase, intro, skills } from "../constants/strings";
import { languages, technologies } from "../constants/techstacks";

const Home = () => {

  return (
    <main>
      <div className="relative mt-36">
        <div className="wave-container absolute top-10 left-0 w-full z-0">
          <div className="wave"></div>
          <div className="wave flipped-wave"></div>
        </div>
        <div className="montserrat w-full relative z-10">
          <p className="text-7xl font-thin text-center">RICARDO ARON III</p>
          <p className="text-2xl font-light text-center">Full-Stack Developer</p>
          <p className="text-center mt-10 text-blue-bell-800">{phrase}</p>
        </div>
      </div>

      <div className="wave-container w-full z-0 mt-40">
        <div className="wave"></div>
      </div>
      <div className="bg-linear-to-b from-blue-bell-600/39 via-blue-bell-700/60 to-blue-bell-600/39 montserrat grid grid-cols-2">
        <p className=" p-12 px-20 text-justify text-xl">{intro}</p>
        <div className="px-20 text-blue-bell-950 flex flex-col justify-center items-center">
          <div className="flex gap-5">
            <a href="https://www.facebook.com/Pyromagne31826" target="_blank" rel="noopener noreferrer"><SiFacebook size={32} className="hover:scale-140 duration-300"/></a>
            <a href="https://www.instagram.com/pyromagne/" target="_blank" rel="noopener noreferrer"><SiInstagram size={32} className="hover:scale-140 duration-300"/></a>
            <a href="https://www.linkedin.com/in/ricardo-aron-23420330a/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={32} className="hover:scale-140 duration-300"/></a>
            <a href="https://github.com/Pyromagne" target="_blank" rel="noopener noreferrer"><SiGithub size={32} className="hover:scale-140 duration-300"/></a>
          </div>
          <p className="mt-4">Connect with me</p>
        </div>
      </div>
      <div className="wave-container w-full z-0">
        <div className="wave flipped-wave"></div>
      </div>

      <div>
        <h1 className="text-2xl montserrat text-center ">SKILLS</h1>
        <div className="grid grid-cols-4 px-20 mt-10">
          {skills.map((skill, index)=><p key={index} className="truncate p-2 m-1 text-blue-bell-900 hover:text-[#100D08] duration-200 hover:cursor-pointer" title={skill.description}>{skill.name}</p>)}
        </div>
      </div>

      <div>
        <h1 className="text-2xl montserrat text-center ">Technologies</h1>
        <div className="grid grid-cols-4 px-20 mt-10">
          {languages.map((language, index)=><p key={index} className="truncate p-2 m-1 text-blue-bell-900 hover:text-[#100D08] duration-200 hover:cursor-pointer">{language.name}</p>)}
        </div>
      </div>
    </main>
  );
}

export default Home;