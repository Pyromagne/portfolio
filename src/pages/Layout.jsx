import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navlinks } from "../constants/navlinks";
import { useState, useEffect } from "react";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.remove("gradient-light");
      body.classList.add("gradient-dark");
    } else {
      body.classList.remove("gradient-dark");
      body.classList.add("gradient-light");
    }
  }, [darkMode]);
  
  return (
    <div className="flex flex-col">

      <nav className="ml-auto">
        {navlinks.map((link, index)=>{
          return (
            <NavLink to={link.link} key={index}
              className={({ isActive }) => (isActive ? ' text-[#100D08]! font-bold ' : null) + 
              ' victor-mono p-2 inline-block text-center text-blue-bell-800'}>
              {link.name}
            </NavLink>
          )
        })}
      </nav>

      <button className="absolute p-2 rounded-br-3xl"
        onClick={() => setDarkMode(!darkMode)}
          >
        {darkMode ? "PM" : "AM"}
      </button>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;