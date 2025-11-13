import whatsnewfeed from "../assets/images/projects/whatsnewfeed-mockup.jpg";
import reveriejournal from "../assets/images/projects/reverie-journal.png";
import projectminesweeper from "../assets/images/projects/project-minesweeper.png"
import nf_btms_lgstc_i from "../assets/images/projects/nexfleet-dynamics-btms-lgstc-I-4.png";
import ge_bot from "../assets/images/projects/ge-bot-mockup.jpg";
import psl from "../assets/images/projects/pen-spinning-library.png";

export const projects = [
    {
        name: 'PROJECT [mine]sweeper',
        type: ['Web Application', 'Game'],
        year: 2025,
        urls: {
            repository: 'https://github.com/Pyromagne/project-minesweeper',
            website: 'https://project-minesweeper.vercel.app/',
            image: projectminesweeper,
        },
        tags: {
            languages: ['TypeScript'],
            techstacks: ['react', 'tailwindcss','vite']
        },
        description: "A simple minesweeper game created using ReactJS and Tailwind CSS",
    },
    {
        name: 'whatsnewfeed',
        type: ['Web Application'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/whatsnewfeed',
            website: 'https://whatsnewfeed.vercel.app/',
            image: whatsnewfeed,
        },
        tags: {
            languages: ['JavaScript'],
            techstacks: ['spotify api', 'react', 'express']
        },
        description: "View your latest releases from artists you followed in spotify with a larger cap.",
    },
    {
        name: 'Reverie Journal',
        type: ['Web Application'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/Reverie-Journal',
            website: 'https://reverie-journal.onrender.com//',
            image: reveriejournal,
        }, tags: {
            languages: ['JavaScript'],
            techstacks: ['react', 'mongodb']
        },
        description: "A web-based dream tracker application",
    },
    {
        name: 'NexFleet Dynamics - BTMS: Logistic I',
        type: ['Website', 'Enterprise System'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/Logistic-I',
            website: 'https://lgstc1.nexfleetdynamics.com/',
            image: nf_btms_lgstc_i,
        }, tags: {
            languages: ['PHP', 'JavaScript'],
            techstacks: ['react', 'laravel']
        },
        description: "A logistics module for NexFleet Dynamics - Bus Transportation Management System",
    },
    {
        name: 'God Eater Wiki Discord Bot',
        type: ['Discord Bot'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/God-Eater-wiki-bot',
            website: '',
            image: ge_bot,
        }, tags: {
            languages: ['JavaScript'],
            techstacks: ['discord js']
        },
        description: "Unofficial discord wiki bot for god eater game series",
    },
    {
        name: 'Pen Spinning Library',
        type: ['Website'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/Pen-Spinning-Library',
            website: 'https://pen-spinning-library.onrender.com/',
            image: psl,
        }, tags: {
            languages: ['JavaScript'],
            techstacks: ['react']
        },
        description: "An open source react application for penspinner that compiles tricks and guides around the globe.",
    },
    {
        name: 'Hospital Human Resource Management System',
        type: ['Website', 'Enterprise System'],
        year: 2023,
        urls: {
            repository: 'https://github.com/edillormark2/HospitalHumanResourceManagementSystem',
            website: '',
            image: 'https://raw.githubusercontent.com/edillormark2/HospitalHumanResourceManagementSystem/refs/heads/master/.resources/screenshot1.png',
        }, tags: {
            languages: ['JavaScript'],
            techstacks: ['react', 'mongodb', 'express', 'mui']
        },
        description: "Web-based Human Resource Management System tailored for hospitals",
    },
    {
        name: 'SFML Button',
        type: ['C++ Library'],
        year: 2023,
        urls: {
            repository: 'https://github.com/Pyromagne/SFML-Button',
            website: '',
            image: '',
        }, tags: {
            languages: ['C++'],
            techstacks: ['sfml']
        },
        description: "C++ library built using the SFML Graphics Library, It is designed to help developers create interactive and customizable button elements",
    },
    {
        name: 'Color Escape',
        type: ['C++ Library'],
        year: 2023,
        urls: {
            repository: 'https://github.com/Pyromagne/ColorEscape',
            website: '',
            image: '',
        }, tags: {
            languages: ['C++'],
            techstacks: []
        },
        description: "C++ library that allows you to print text with colors and backgrounds on a terminal based application",
    }
];


//TEMPLATE
/* 
{
    name: '',
    type: [''],
    year: 20XX,
    urls: {
        repository: '',
        website: '',
        image: '',
    },tags: {
        languages: [],
        techstacks: []
    },
    description: "",
}
*/

import { Vibrant } from "node-vibrant/browser";

export const getProjectPalettes = async () => {
  const results = await Promise.all(
    projects.map(async (proj) => {
      const imageUrl = proj?.urls?.image;
      if (!imageUrl) return null;

      try {
        const palette = await Vibrant.from(imageUrl).getPalette();

        // Extract hex colors from palette
        const hexPalette = {};
        for (const key in palette) {
          hexPalette[key] = palette[key]?.hex;
        }

        return {
          name: proj.name,
          palette: hexPalette,
        };
      } catch (err) {
        console.error(`Palette error for ${proj.name}`, err);
        return null;
      }
    })
  );

  return results.filter(Boolean);
};