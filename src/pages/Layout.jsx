import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navlinks } from "../constants/navlinks";
import { useState, useEffect } from "react";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className={`flex flex-col text-text gradient ${darkMode ? 'dark' : ''}`}>
      <nav className="ml-auto">
        {navlinks.map((link, index) => {
          return (
            <NavLink to={link.link} key={index}
              className={({ isActive }) => (isActive ? 'font-bold text-text' : null) +
                ' victor-mono p-2 inline-block text-center text-blue-bell-800'}>
              {link.name}
            </NavLink>
          )
        })}
      </nav>

      <button className="absolute p-2 rounded-br-3xl victor-mono font-medium hover:cursor-pointer text-text"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "PM" : "AM"}
      </button>

      <div>
        <Outlet />
      </div>

      <div>
        <div className="wave w-full top-0 h-44" />
        <div className="p-10 wave-bottom">
          <p className='text-center'>&copy;  {year} Ricardo Aron III, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;