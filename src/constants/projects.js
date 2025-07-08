import whatsnewfeed from "../assets/images/projects/whatsnewfeed.png";
import reveriejournal from "../assets/images/projects/reverie-journal.png";

export const projects = [
    {
        name: 'whatsnewfeed',
        type: ['Web Application'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/whatsnewfeed',
            website: 'https://whatsnewfeed.onrender.com/',
            image: whatsnewfeed,
        },
        tags: {
            languages: ['javascript'],
            techstacks: ['spotify api', 'react', 'express']
        }
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
            languages: ['javascript'],
            techstacks: ['react', 'mongoDB']
        }
    },
    {
        name: 'NexFleet Dynamics - BTMS: Logistic I',
        type: ['Website', 'System'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/Logistic-I',
            website: 'https://lgstc1.nexfleetdynamics.com/',
            image: '',
        }, tags: {
            languages: ['php', 'javascript'],
            techstacks: ['react', 'laravel']
        }
    },
    {
        name: 'God Eater Wiki Discord Bot',
        type: ['Discord Bot'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/God-Eater-wiki-bot',
            website: '',
            image: '',
        }, tags: {
            languages: ['javascript'],
            techstacks: ['discord.js']
        }
    },
    {
        name: 'Pen Spinning Library',
        type: ['Website'],
        year: 2024,
        urls: {
            repository: 'https://github.com/Pyromagne/Pen-Spinning-Library',
            website: 'https://pen-spinning-library.onrender.com/',
            image: '',
        }, tags: {
            languages: ['javascript'],
            techstacks: ['react']
        },
    },
    {
        name: 'Hospital Human Resource Management System',
        type: ['Website', 'System'],
        year: 2023,
        urls: {
            repository: 'https://github.com/edillormark2/HospitalHumanResourceManagementSystem',
            website: '',
            image: 'https://raw.githubusercontent.com/edillormark2/HospitalHumanResourceManagementSystem/refs/heads/master/.resources/screenshot1.png',
        }, tags: {
            languages: ['javascript'],
            techstacks: ['react', 'mongoDB', 'express', 'MUI']
        }
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
            languages: ['c++'],
            techstacks: ['SFML']
        }
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
            languages: ['c++'],
            techstacks: []
        }
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
    }
}
*/