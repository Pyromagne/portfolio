import { Outlet,NavLink } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { navlinks } from "../constants/navlinks";
import ParticlesComponent from "../components/particles";
import ParticlesComponent2 from "../components/particles2";


const Layout = () => {
  return (
    <div className="relative w-full pt-4 h-dvh flex flex-col">
      {/* <ParticlesComponent id="particles2" /> */}
      <ParticlesComponent2 id="particles" />
      <div className="h-fit w-fit flex ml-auto mr-4 text-xl flex-row-reverse">
        {navlinks.map((link, index)=>{
          return (
            <NavLink to={link.link} key={index}
              className={({ isActive }) => (isActive ? '!bg-white text-black font-bold ' : null) + 
              ' victor-mono px-2'}>
              {link.name}
            </NavLink>
          )
        })}
      </div>
      
      <div className="flex-1 overflow-y-auto mr-4 mb-4 ml-16 border-2 border-white bg-black/10 backdrop-blur-sm">
        <Outlet />
      </div>

      <div className="fixed ml-6 bottom-0 left-0 flex flex-col mb-4 ">
        <a href="https://github.com/Pyromagne" className="bg-white text-black hover:text-[#181717] hover:bg-white py-2 px-1 duration-100" target="_blank" rel="noreferrer">
          <SiGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/ricardo-aron-23420330a/" className="bg-white text-black hover:text-[#0072b1] hover:bg-white py-2 px-1 duration-100" target="_blank" rel="noreferrer">
          <SiLinkedin size={32} />
        </a>
        <a href="https://www.instagram.com/pyromagne" className="bg-white text-black hover:text-[#FF0069] hover:bg-white py-2 px-1 duration-100" target="_blank" rel="noreferrer">
          <SiInstagram size={32} />
        </a>
      </div>
    </div>
  )
}

export default Layout;