import { Outlet,NavLink } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { navlinks } from "../constants";

const Layout = () => {
  return (
    <div className="relative w-full h-screen pt-10">
      <div className="h-fit w-fit flex gap-4 ml-auto mr-20 text-xl">
        {navlinks.map((link, index)=>{
          return (
            <NavLink to={link.link} key={index} className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>
              {link.name}
            </NavLink>
          )
        })}
      </div>

      <Outlet />

      <div className="fixed bottom-0 left-0 p-4 flex flex-col gap-4">
        <a href="https://github.com/Pyromagne" target="_blank" rel="noreferrer">
          <SiGithub size={28} />
        </a>
        <a href="https://www.instagram.com/pyromagne" target="_blank" rel="noreferrer">
          <SiLinkedin size={28} />
        </a>
        <a href="https://www.instagram.com/pyromagne" target="_blank" rel="noreferrer">
          <SiInstagram size={28} />
        </a>
      </div>
    </div>
  )
}

export default Layout;