import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navlinks } from "../constants/navlinks";

const Layout = () => {

  return (
    <div className="flex flex-col">

      <nav className="ml-auto">
        {navlinks.map((link, index)=>{
          return (
            <NavLink to={link.link} key={index}
              className={({ isActive }) => (isActive ? ' !text-[#100D08] font-bold ' : null) + 
              ' victor-mono p-2 inline-block text-center text-[#464869]'}>
              {link.name}
            </NavLink>
          )
        })}
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;