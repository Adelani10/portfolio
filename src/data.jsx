

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
        text: 'services',
        icon: <i className="fa-solid fa-server"></i>
    },
    {
        id: 4,
        text: 'portfolio',
        icon: <i className="fa-solid fa-briefcase"></i>
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
        image: 'https://res.cloudinary.com/dksvvhuj2/image/upload/v1674896627/portfolio/thumbnails/quiz_bj9pun.jpg',
        category: 'react',
        tools: 'React.Js & TailwindCss',
        githubRepo: 'https://github.com/Adelani10/quizGame',
        live: 'https://test-your-general-knowledge.netlify.app/',
        summary: 'An Educative quiz app. Questions & answers fetched from an external source. On submitting, users can see corrections of questions failed, as well as their total score for each section.'
    },

    {
        id: 2,
        name: 'Countries Info',
        image: 'https://res.cloudinary.com/dksvvhuj2/image/upload/v1674896688/portfolio/thumbnails/countries_twknij.jpg',
        category: 'react',
        tools: 'TailwindCss & React.Js',
        githubRepo: 'https://github.com/Adelani10/country-react',
        live: 'https://ab-countries.netlify.app/',
        summary: 'Built an App that displays information of several Countries on load, users can also learn more about whichever Country, from whichever region, by simply selecting the option. This App has a Dark & Light mode toggle.'
    },
   
    {
        id: 3,
        name: 'Save Players',
        image: 'https://res.cloudinary.com/dksvvhuj2/image/upload/v1674896695/portfolio/thumbnails/fpl_bdullf.jpg',
        category: 'javascript',
        tools: 'Html, Css & Javascript',
        githubRepo: 'https://github.com/Adelani10/playersName',
        live: 'https://adelani10.github.io/playersName/',
        summary: "Using Html, Css and Vanilla Javascript, I built a simple players-to-look-out-for app for fantasy football lovers. It works by simply inputting a player's name and submitting. Tranversing the localStorage, the App saves and displays the data for as much players inputed as possible. There are edit and delete functionality on each player-name saved."
    },

    {
        id: 4,
        name: 'tenzies',
        image: 'https://res.cloudinary.com/dksvvhuj2/image/upload/v1674896662/portfolio/thumbnails/tenzies_g26pze.jpg',
        category: 'react',
        tools: 'React.Js & TailwindCss',
        githubRepo: 'https://github.com/Adelani10/tenzies',
        live: 'https://tenzies-game-ab.netlify.app/',
        summary: 'Built a Game that requires you to roll a dice & freeze a particular number for each block until all 10 blocks have the same number. The App saves & displays the number of dice-rolls & the time taken to achieve this.'
    },

    {
        id: 5,
        name: 'movie-watchlist',
        image: 'https://res.cloudinary.com/dksvvhuj2/image/upload/v1674896636/portfolio/thumbnails/movies_vws981.jpg',
        category: 'javascript',
        tools: 'Html, CSS & Javascript',
        githubRepo: 'https://github.com/Adelani10/movies',
        live: 'https://adelani10.github.io/movies',
        summary: 'A two-paged App that allows you to search for movies of your choice, as much as you want, then returns a minimum of 9 movies of similar title, in the first page. Users can save as much movies as they can to the Watchlist page (second page). They can also remove as much movies as they want from the Watchlist page.'
    },
    
    {
        id: 6,
        name: 'Fylo Landing Page',
        image: 'https://res.cloudinary.com/dksvvhuj2/image/upload/v1674896740/portfolio/thumbnails/fylo_t9nqqf.jpg',
        category: 'html/css',
        tools: 'Html & CSS',
        githubRepo: 'https://github.com/Adelani10/Fylo',
        live: 'https://adelani10.github.io/Fylo/',
        summary: 'A simple, static landing page created with Html5 and CSS3. Majorly built with regard for responsiveness.'
    },

    {
        id: 7,
        name: 'Musica',
        image: 'https://res.cloudinary.com/dksvvhuj2/image/upload/v1674896849/portfolio/thumbnails/musica_thumbnail_z9zlge.png',
        category: 'react',
        tools: 'React.Js & TailwindCss',
        githubRepo: 'https://github.com/Adelani10/musica',
        live: 'https://ab-musica.netlify.app',
        summary: 'A full music react app with numerous pages and functionalities'
    },
]

const skillsData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1674897203/portfolio/tools/html5-original-wordmark_kvqjnl.svg",
        name: "html5",
        text: "The markup language used for structuring and presenting content."
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1674897203/portfolio/tools/css3-original-wordmark_uedlrk.svg",
        name: "css3",
        text: "The standard used in the styling and formatting of web pages."
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1674897203/portfolio/tools/javascript-plain_ae3hnj.svg",
        name: "JavaScript",
        text: "A text-based programming language used both on the client-side and server-side that allows you to make web pages interactive."
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1674897203/portfolio/tools/tailwind-css-seeklogo.com_lmubj8.svg",
        name: "tailwindCSS",
        text: "A utility-first CSS framework that can be composed to build any design, directly in your markup."
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1674897203/portfolio/tools/react-original-wordmark_rjverm.svg",
        name: "react",
        text: "An open-source front-end javascript library for building user interfaces based on UI components."
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1674897204/portfolio/tools/github-original_eudeaz.svg",
        name: "github",
        text: "A code hosting platform for version control and collaboration."
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/dksvvhuj2/image/upload/v1674897203/portfolio/tools/git-seeklogo.com_d3ykaw.svg",
        name: "git",
        text: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
    },

]

//  else if (openNav === true){
//            return (<a 
//                 key={id}
//                 href={`#${text}`} 
//                 id={id}
//                 className={`bg-white w-full flex items-center px-7 text-teal-800 capitalize h-12 rounded-full transition-all ease-in-out duration-500 hover:text-white hover:bg-teal-800 space-x-4`}>
//                     {icon}
//                 <p className='tracking-widest'>{text}</p>
//             </a>)
//         }

export  {linksData, projectsData, skillsData}