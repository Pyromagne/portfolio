import { Outlet,NavLink } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { navlinks } from "../constants";
import ParticlesComponent from "../components/particles";
import ParticlesComponent2 from "../components/particles2";


const Layout = () => {
  return (
    <div className="relative w-full h-screen pt-10">
      <ParticlesComponent id="particles2" />
      <ParticlesComponent2 id="particles" />
      <div className="h-fit w-fit flex gap-4 ml-auto mr-20 text-xl">
        {navlinks.map((link, index)=>{
          return (
            <NavLink to={link.link} key={index} className={({ isActive }) => (isActive ? 'text-cyan-300 border-b-2 border-cyan-300' : '')+' border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300'}>
              {link.name}
            </NavLink>
          )
        })}
      </div>

      <Outlet />

      <div className="fixed bottom-0 left-0 p-4 flex flex-col gap-4">
        <a href="https://github.com/Pyromagne" className="hover:text-cyan-300" target="_blank" rel="noreferrer">
          <SiGithub size={28} />
        </a>
        <a href="https://www.instagram.com/pyromagne" className="hover:text-cyan-300" target="_blank" rel="noreferrer">
          <SiLinkedin size={28} />
        </a>
        <a href="https://www.instagram.com/pyromagne" className="hover:text-cyan-300" target="_blank" rel="noreferrer">
          <SiInstagram size={28} />
        </a>
      </div>
    </div>
  )
}

export default Layout;