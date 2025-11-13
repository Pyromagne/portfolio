import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useScramble } from "use-scramble";
import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

/* import useWakaTimeStats from "../hooks/useWakatimeStats"; */
import CountUp from "../components/CountUp";
import IconFont, { IconCapsule } from "../components/IconFont";

import { getProjectPalettes } from "../constants/projects";
import { phrase, intro, skills } from "../constants/strings";
import { languages, technologies } from "../constants/techstacks";
import { projects } from "../constants/projects";
import { emailBtnAnimation, expCardAnimation, languageAnimation, projCardAnimation, ProjectAnimation, resumeBtnAnimation, socialPhraseAnimation, techstacksAnimation } from "../constants/animations";

import resume from "../assets/documents/ricardo_aron_iii_resume.pdf"

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
      gsap.fromTo('.projects', ProjectAnimation.from, ProjectAnimation.to);
      gsap.from(['.social', '#intro'], { opacity: 0, duration: 1, ease: 'power3.in' });
      gsap.fromTo('#connect', socialPhraseAnimation.from, socialPhraseAnimation.to)
      gsap.fromTo(expCardRef.current, expCardAnimation.from, expCardAnimation.to);
      gsap.fromTo(projCardRef.current, projCardAnimation.from, projCardAnimation.to);
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
            onMouseEnter={() => gsap.to('.resume', resumeBtnAnimation.enter)}
            onMouseLeave={() => gsap.to('.resume', resumeBtnAnimation.leave)}
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
            onMouseEnter={() => gsap.to('.email', emailBtnAnimation.enter)}
            onMouseLeave={() => gsap.to('.email', emailBtnAnimation.leave)}
          >
            email
          </button>
        </div>

        <div className="grid grid-cols-2 mt-30">
          <p id="intro" className="text-justify text-lg">{intro}</p>

          <div className="flex flex-col justify-center items-end">
            <div className="flex gap-5">
              <a className="social" href="https://www.facebook.com/Pyromagne31826" target="_blank" rel="noopener noreferrer">
                <SiFacebook size={32} className="hover:text-[#0866FF] duration-200" />
              </a>
              <a className="social" href="https://www.instagram.com/pyromagne/" target="_blank" rel="noopener noreferrer">
                <SiInstagram size={32} className="hover:text-[#FF0069] duration-200" />
              </a>
              <a className="social" href="https://www.linkedin.com/in/ricardo-aron-23420330a/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin size={32} className="hover:text-[#0077B3] duration-200" />
              </a>
              <a className="social" href="https://github.com/Pyromagne" target="_blank" rel="noopener noreferrer">
                <SiGithub size={32} className="hover:text-[#181717] duration-200" />
              </a>
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
                  <div key={index} className="language-capsule rounded-full px-4 py-2 shadow" style={{ backgroundColor: lang.color }}>
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
        <h2 className="text-center font-light text-4xl montserrat mb-10 text-shadow-sm">My Recent Projects</h2>

        <div className="grid grid-cols-2 gap-4">
          {projects.slice(0, 8).map((project, index) => {
            const projectPalette = paletteProjects.find((p) => p.name === project.name);
            const color1 = projectPalette?.palette?.LightVibrant || "#ffffff";
            const color2 = projectPalette?.palette?.DarkMuted || "#000000";

            return (
              <div key={index}
                onMouseEnter={() => {
                  gsap.to(`#project-image-${index}`, { left: 25, ease: 'power2.inOut' });
                  gsap.to(`#project-desc-${index}`, { opacity: 0, ease: 'power2.inOut' });
                }}
                onMouseLeave={() => {
                  gsap.to(`#project-image-${index}`, { left: '50%', ease: 'power2.inOut' })
                  gsap.to(`#project-desc-${index}`, { opacity: 1, ease: 'power2.inOut' });
                }}
                className="projects opacity-0 overflow-hidden relative flex p-4 h-64 rounded-xl shadow-lg"
              >
                <div className="rounded-md flex flex-col w-full z-20">
                  <a href={project.urls.website} target="_blank" rel="noopener noreferrer">
                    <p className="text-2xl quicksand tracking-wider truncate text-shadow-md w-11/12">{project.name}</p>
                  </a>
                  <p className="text-sm">{project.type?.join(", ")}</p>

                  <p id={`project-desc-${index}`} className="w-2/3 mt-10 text-shadow-sm">{project.description}</p>

                  <div className="mt-auto">
                    {project.tags.languages?.map((lang, index) => (
                      <span
                        key={index}
                        style={{
                          color: languages.find((L) => L.name === lang)?.color
                        }}
                        className="border-2 victor-mono text-xs px-1 rounded font-semibold mr-2 text-shadow-sm shadow"
                      >
                        {languages.find((L) => L.name === lang)?.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex flex-col z-20 gap-2">
                  {project.tags.techstacks.map((t, index) => {
                    return (
                      <span key={index} className="bg-white rounded-full p-1 w-8 h-8 flex justify-center items-center shadow">
                        <IconFont key={index} name={t} tooltip={t} style={{ color: technologies.find((T) => T.icon === t)?.color }} className="text-shadow-md text-lg" />
                      </span>
                    )
                  })}
                </div>

                <div id={`project-image-${index}`}
                  style={{ mask: 'linear-gradient(to right, transparent, black 40%)', backgroundImage: `url(${project.urls.image})` }}
                  className="absolute top-0 left-[50%] z-10 w-full h-full bg-cover"
                />

                <div style={grad(color1, color2)} className="opacity-75" />
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-10">
          <a href="https://github.com/Pyromagne?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-lg font-m montserrat w-fit text-blue-bell-800">
            View all Projects
          </a>
        </div>

      </section>

      {/* SECTION 4 */}
      <section id="section-4" className="min-h-svh py-10">
        <h1 className="text-3xl montserrat text-center font-light">The skills I have gained throughout my experience</h1>

        <div className="grid grid-cols-4 mt-10 gap-4">
          {skills.slice(0, 4).map((skill, index) => {
            return (
              <div key={index} id={`skill-a-${index}`} className="border border-blue-bell-600 rounded-xl p-4">
                <p className="text-xl truncate" title={skill.name}>{skill.name}</p>
                <p className="mt-4 text-blue-bell-800">{skill.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-5 mt-4 gap-4">
          {skills.slice(4).map((skill, index) => {
            return (
              <div key={index} id={`skill-b-${index}`} className=" border-blue-bell-600 rounded-xl p-2"
                onMouseEnter={() => gsap.to(`#skill-b-${index}`, { scale: 1.15, duration: .2, ease: 'power1.inOut' })}
                onMouseLeave={() => gsap.to(`#skill-b-${index}`, { scale: 1, duration: .2, ease: 'power1.out' })}
              >
                <p className="text truncate" title={skill.name}>{skill.name}</p>
                <p className="mt-2 text-blue-bell-800 text-sm line-clamp-2">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;

const grad = (color1, color2) => {
  let style = {
    position: 'absolute',
    inset: 0,
    /* mask: 'linear-gradient(320deg, transparent 0%, rgba(0, 0, 0, .9)90%, black 100%', */
    background: `linear-gradient(320deg, ${color2} 0%, ${color1} 100%`,
    /* backdropFilter: 'blur(32px)',
    backgroundColor: `${color1}`, */
  };

  return style;
}