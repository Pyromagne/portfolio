import { Outlet } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { navlinks } from '../constants/navlinks'

import gsap from "gsap";
import ScrollSmoother from "gsap/src/ScrollSmoother";
import ScrollToPlugin from "gsap/src/ScrollToPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollToPlugin, ScrollTrigger);

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const year = new Date().getFullYear();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: .8,
        effects: true,
        smoothTouch: 0.1,
      });

      smoother.effects('#resume-email-btns', { lag: .1 });

      gsap.to('nav button', { duration: 1, ease: 'bounce.inOut' });

    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const gradient = {
      color1: darkMode ? "#292a3d" : "#f6f6f8",
      color2: darkMode ? "#100d08" : "#959bcc"
    };

    gsap.to(gradient, {
      duration: 5,
      color1: darkMode ? "#100d08" : "#959bcc",
      color2: darkMode ? "#292a3d" : "#f6f6f8",
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      onUpdate: () => {
        document.body.style.backgroundImage =
          `linear-gradient(145deg, ${gradient.color1}, ${gradient.color2})`;
      }
    });
  }, [darkMode]);


  useLayoutEffect(() => {
    const asd = document.querySelectorAll("nav button");

    navlinks.forEach((link, index) => {
      ScrollTrigger.create({
        trigger: `#section-${index + 1}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveLink(index),
        onEnterBack: () => setActiveLink(index),
      })
    });

    function setActiveLink(index) {
      asd.forEach(link => link.classList.remove("active"));
      asd[index].classList.add("active");
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div id="smooth-wrapper" className='flex flex-col text-text'>
      <button className="fixed bottom-0 right-0 p-4 victor-mono font-medium hover:cursor-pointer text-text z-20"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "PM" : "AM"}
      </button>

      <nav className="fixed right-0 z-20 text-vertical-lr">
        {navlinks.map((link, index) => {
          return (
            <button key={index} onClick={() => gsap.to(window, { duration: .1, scrollTo: `#section-${index + 1}` })}
              className="victor-mono p-2 inline-block text-center text-blue-bell-800 hover:text-black">
              {link.name}
            </button>
          )
        })}
      </nav>

      <div id="smooth-content">
        <Outlet />
      </div>

      <div className="w-full">
        <p className='text-center relative mb-4'>&copy;  {year} Ricardo Aron III, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Layout;