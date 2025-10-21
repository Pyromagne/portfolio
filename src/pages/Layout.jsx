import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { navlinks } from '../constants/navlinks'

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className='flex flex-col text-text gradient'>
      <button className="fixed bottom-0 right-0 p-4 victor-mono font-medium hover:cursor-pointer text-text z-20"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "PM" : "AM"}
      </button>

      <nav className="fixed right-0 z-20 text-vertical-lr">
        {navlinks.map((link, index) => {
          return (
            <a href={link.link} key={index}
              className="victor-mono p-2 inline-block text-center text-blue-bell-800">
              {link.name}
            </a>
          )
        })}
      </nav>

      <div>
        <Outlet />
      </div>

      <div className="w-full">
        <p className='text-center relative mb-4'>&copy;  {year} Ricardo Aron III, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Layout;