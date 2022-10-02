import React from "react";
import fylo from './assets/fylo.jpg'
import countries from './assets/countries.jpg'
import quiz from './assets/quiz.jpg'
import movie from './assets/movie.jpg'
import fpl from './assets/fpl.jpg'
import tenzies from './assets/tenzies.jpg'


const linksData = [
    {
        id: 1,
        text: 'home',
        icon: <i className="fa-solid fa-house"></i>
    },
    {
        id: 2,
        text: 'about',
        icon: <i className="fa-solid fa-user"></i>
    },
    {
        id: 3,
        text: 'portfolio',
        icon: <i className="fa-solid fa-briefcase"></i>
    },
    {
        id: 4,
        text: 'services',
        icon: <i className="fa-solid fa-server"></i>
    },
    {
        id: 5,
        text: 'contact',
        icon: <i className="fa-solid fa-envelope"></i>
    },
]

const projectsData = [
    {
        id: 1,
        image: {quiz},
        category: 'react',
        githubRepo: 'https://github.com/Adelani10/quizGame',
        live: 'https://test-your-general-knowledge.netlify.app/'
    },
    {
        id: 2,
        image: {movie},
        category: 'javascript',
        githubRepo: 'https://github.com/Adelani10/movies',
        live: 'https://adelani10.github.io/movies'
    },
    {
        id: 3,
        image: {tenzies},
        category: 'react',
        githubRepo: 'https://github.com/Adelani10/tenzies',
        live: 'https://tenzies-game-ab.netlify.app/'
    },
    {
        id: 4,
        image: {countries},
        category: 'react',
        githubRepo: 'https://github.com/Adelani10/country-react',
        live: 'https://ab-countries.netlify.app/'
    },
    {
        id: 5,
        image: {fpl},
        category: 'javascript',
        githubRepo: 'https://github.com/Adelani10/playersName',
        live: 'https://adelani10.github.io/playersName/'
    },
    {
        id: 6,
        image: {fylo},
        category: 'html/css',
        githubRepo: 'https://github.com/Adelani10/Sidehustle_GRP_96',
        live: 'https://adelani10.github.io/Sidehustle_GRP_96'
    }
]

export  {linksData, projectsData}