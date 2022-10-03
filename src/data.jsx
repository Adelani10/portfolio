

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
        name: 'quizzical',
        image: '/quiz.jpg',
        category: 'react',
        tools: 'React.Js & TailwindCss',
        githubRepo: 'https://github.com/Adelani10/quizGame',
        live: 'https://test-your-general-knowledge.netlify.app/',
        summary: 'An Educative quiz app. Questions & answers fetched from an external source. On submitting, users can see corrections of questions failed, as well as their total score for each section.'
    },

    {
        id: 2,
        name: 'Countries Info',
        image: '/countries.jpg',
        category: 'react',
        tools: 'TailwindCss & React.Js',
        githubRepo: 'https://github.com/Adelani10/country-react',
        live: 'https://ab-countries.netlify.app/',
        summary: 'Built an App that displays information of several Countries on load, users can also learn more about wwhichever Country, from whichever region, by simply selecting the option. This App has a Dark & Light mode toggle.'
    },
   
    {
        id: 3,
        name: 'Save Players',
        image: '/fpl.jpg',
        category: 'javascript',
        tools: 'Html, Css & Javascript',
        githubRepo: 'https://github.com/Adelani10/playersName',
        live: 'https://adelani10.github.io/playersName/',
        summary: "Using Html, Css and Vanilla Javascript, I built a simple players-to-look-out-for app for fantasy football lovers. It works by simply inputting a player's name and submitting. It saves and displays the data for as much players inputed as possible. There are edit and delete functionality on each player-name saved."
    },

    {
        id: 4,
        name: 'tenzies',
        image: '/tenzies.jpg',
        category: 'react',
        tools: 'React.Js & TailwindCss',
        githubRepo: 'https://github.com/Adelani10/tenzies',
        live: 'https://tenzies-game-ab.netlify.app/',
        summary: 'Built a Game that requires you to roll a dice & freeze a particular number for each block until all 10 blocks have the same number. The App saves & displays the number of dice-rolls & the time taken to achieve this.'
    },

    {
        id: 5,
        name: 'movie-watchlist',
        image: '/movie.jpg',
        category: 'javascript',
        tools: 'Html, CSS & Javascript',
        githubRepo: 'https://github.com/Adelani10/movies',
        live: 'https://adelani10.github.io/movies',
        summary: 'A two-paged App that allows you to search movie titles of your choice, as much as you want, then returns a minimum of 9 movies of similar title, in the first page. Users can save as much movies as they can to the Watchlist page (second page). They can also remove as much movies as they want from the Watchlist page.'
    },
    
    {
        id: 6,
        name: 'Fylo Landing Page',
        image: '/fylo.jpg',
        category: 'html/css',
        tools: 'Html & CSS',
        githubRepo: 'https://github.com/Adelani10/Sidehustle_GRP_96',
        live: 'https://adelani10.github.io/Sidehustle_GRP_96',
        summary: 'A simple, static landing page created with Html5 and CSS3.'
    }
]

export  {linksData, projectsData}