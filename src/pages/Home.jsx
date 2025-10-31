import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { getProjectPalettes } from "../constants/projects";
import { useScramble } from "use-scramble";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { emailBtnAnimation, expCardAnimation, languageAnimation, projCardAnimation, resumeBtnAnimation, socialPhraseAnimation, techstacksAnimation } from "../constants/animations";
import CountUp from "../components/CountUp";

import { phrase, intro, skills } from "../constants/strings";
import { languages, technologies } from "../constants/techstacks";
import { projects } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconCapsule } from "../components/IconFont";
import resume from "../assets/documents/ricardo_aron_iii_resume.pdf"
/* import useWakaTimeStats from "../hooks/useWakatimeStats"; */

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {
  const year = new Date().getFullYear();
  const [paletteProjects, setPaletteProjects] = useState([]);
  /* const { stats, loading, error } = useWakaTimeStats(); */
  
  const expCardRef = useRef(null);
  const projCardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.techstacks-capsule', techstacksAnimation.from, techstacksAnimation.to);
      gsap.fromTo('.language-capsule', languageAnimation.from, languageAnimation.to);
      gsap.from(['.social', '#intro'], {opacity: 0, duration: 1, ease: 'power3.in'});
      gsap.fromTo('#connect', socialPhraseAnimation.from, socialPhraseAnimation.to)
      gsap.fromTo(expCardRef.current, expCardAnimation.from, expCardAnimation.to);
      gsap.fromTo(projCardRef.current, projCardAnimation.from, projCardAnimation.to);
    });
    return () => ctx.revert();
  }, []);


  const [name, setName] = useState('RICARDO ARON III');
  const { ref: nameRef } = useScramble({
    text: name,
    range: [65, 90],
    speed: .50,
    tick: 5,
    step: 8,
    scramble: 5,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: true,
  });
  const { ref: phraseRef, replay } = useScramble({
    text: phrase,
    speed: 0.50,
    tick: 1,
    step: 8,
    scramble: 5,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: true,
  });

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
    <main className="px-30 overflow-hidden">

      {/* SECTION 1 */}
      <section id="section-1" className="min-h-svh py-10 montserrat relative flex flex-col items-center">
        <p className="font-thin text-7xl text-center mt-40" ref={nameRef} onMouseEnter={() => setName('PYROMAGNE')} onMouseLeave={() => setName('RICARDO ARON III')}>RICARDO ARON III</p>
        <p className="font-light text-2xl text-center">Full-Stack Developer</p>

        <p className="victor-mono font-medium text-sm text-center text-blue-bell-800 mt-10" ref={phraseRef} onMouseEnter={replay}>{phrase}</p>

        <div id="resume-email-btns" className="flex justify-center mt-10 gap-4 border w-fit rounded-full py-2 px-4 items-center shadow">
          <a className="resume rounded victor-mono uppercase" href={resume} target="_blank" rel="noopener noreferrer"
            onMouseEnter={()=>gsap.to('.resume', resumeBtnAnimation.enter)}
            onMouseLeave={()=>gsap.to('.resume', resumeBtnAnimation.leave)}
          >
            resume
          </a>
          <span>|</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText("aroniii.ricardo@gmail.com");
              alert("Email copied to clipboard!");
            }}
            className="email rounded victor-mono uppercase cursor-pointer"
            onMouseEnter={()=>gsap.to('.email', emailBtnAnimation.enter)}
            onMouseLeave={()=>gsap.to('.email', emailBtnAnimation.leave)}
          >
            email
          </button>
        </div>

        <div className="grid grid-cols-2 mt-30">
          <p id="intro" className="text-justify text-lg">{intro}</p>

          <div className="flex flex-col justify-center items-end">
            <div className="flex gap-5">
              <a className="social" href="https://www.facebook.com/Pyromagne31826" target="_blank" rel="noopener noreferrer"><SiFacebook size={32} /></a>
              <a className="social" href="https://www.instagram.com/pyromagne/" target="_blank" rel="noopener noreferrer"><SiInstagram size={32} /></a>
              <a className="social" href="https://www.linkedin.com/in/ricardo-aron-23420330a/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={32} /></a>
              <a className="social" href="https://github.com/Pyromagne" target="_blank" rel="noopener noreferrer"><SiGithub size={32} /></a>
            </div>
            <p id="connect" className="mt-4 text-lg font-medium">{`Let’s stay connected`}</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-2" className="min-h-svh py-10 gap-6 flex flex-col quicksand">
        <div className="w-full flex gap-6 text-right montserrat">
          <div ref={expCardRef} className="sl-l relative w-full h-fit px-10 pt-16 pb-6 rounded-2xl border border-blue-bell-500 overflow-hidden">
            <p className="relative text-7xl font-bold">
              <CountUp from={0} to={year - 2021} separator="," direction="up" duration={.2} />
            </p>
            <p className="relative text-xl font-medium">Years of Experience</p>
            <p className="relative victor-mono text-sm text-blue-bell-800">Always learning and improving</p>
          </div>

          <div ref={projCardRef} className="sl-r relative w-full h-fit px-10 pt-16 pb-6 rounded-2xl border border-blue-bell-500 overflow-hidden">
            <p className="relative text-7xl font-bold">
              <CountUp from={0} to={projects.length} separator="," direction="up" duration={.2} />+
            </p>
            <p className="relative text-xl font-medium">Projects Completed</p>
            <p className="relative victor-mono text-sm text-blue-bell-800">Delivering quality and consistency</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full mt-10">

          <div className="mb-8">
            <p className="montserrat text-blue-bell-800 mb-4 text-center">{`These are some of the technologies I’ve worked with over the past few years.`}</p>
            <div className="flex gap-2 w-full flex-wrap justify-center pb-2">
              {technologies.map((tech, index) => <IconCapsule icon={tech.icon} name={tech.name} key={index} color={tech.color} className="techstacks-capsule opacity-0" />)}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex gap-3 w-full flex-wrap justify-center">
              {languages.map((lang, index) => {
                return (
                  <div key={index} className="language-capsule rounded-full px-4 py-2 shadow" style={{backgroundColor: lang.color}}>
                    <div className="flex justify-between items-center">
                      <i className={`${lang.icon} text-xl mr-2 leading-0 text-background`} />
                      <p className="font-medium text-background">{lang.name}</p>
                    </div>
                    {/* <p className="text-blue-bell-800 text">{stats?.languages.find((l) => l.name === lang.name)?.text}</p> */}
                  </div>
                )
              })}
            </div>
            <p className="montserrat text-blue-bell-800 text-center mt-2">{`Languages I frequently use in my projects.`}</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-3" className="min-h-svh py-10 relative">
        <h2 className="text-center font-light text-3xl montserrat">Featured Projects</h2>
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

        <div className="flex justify-center relative z-10">
          <a href="https://github.com/Pyromagne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-lg font-m montserrat w-fit text-blue-bell-800">
            View all Projects
          </a>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollLeft}
          className="absolute -left-10 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg z-10 border cursor-pointer"
        >
          <BiChevronLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute -right-10 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg z-10 border cursor-pointer"
        >
          <BiChevronRight size={24} />
        </button>
      </section>

      {/* SECTION 4 */}
      <section id="section-4" className="min-h-svh py-10">
        <h1 className="text-3xl montserrat text-center font-light">Skills</h1>

        <div className="grid grid-cols-4 mt-10">
          {skills.map((skill, index) => <p key={index} className="truncate p-2 m-1 text-blue-bell-900 hover:text-text duration-200 hover:cursor-pointer" title={skill.description}>{skill.name}</p>)}
        </div>
      </section>
    </main>
  );
}

export default Home;

function hexToRGB(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return [
    ((bigint >> 16) & 255) / 255,
    ((bigint >> 8) & 255) / 255,
    (bigint & 255) / 255,
  ];
}
