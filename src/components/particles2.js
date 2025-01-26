import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import svg from "../assets/Tattoo.svg";

const ParticlesComponent2 = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadAll(engine);
      //await loadFull(engine);
      //await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble"
          }
        },
        modes: {
          bubble: {
            distance: 40,
            duration: 2,
            opacity: 8,
            size: 6,
            speed: 3
          }
        }
      },
      particles: {
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 10,
            sync: true
          }
        },
        links: {
          blink: false,
          color: "random",
          consent: false,
          distance: 80,
          enable: true,
          opacity: 0.8,
          width: 0.3
        },
        move: {
          enable: true,
          outModes: "bounce",
          speed: { min: 0.5, max: 1 }
        },
        number: {
          value: 150
        },
        opacity: {
          animation: {
            enable: true,
            speed: 2,
            sync: false
          },
          random: false,
          value: { min: 0.1, max: 0.3 }
        },
        shape: {
          type: "circle"
        },
        size: {
          animation: {
            enable: false,
            speed: 10,
            sync: false
          },
          random: true,
          value: { min: 1, max: 2 }
        }
      }
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent2;