import React from "react";

export default function Home () {
    return (
        <main id="home" className="container mx-auto md:px-44 flex flex-col justify-center items-center md:items-start h-screen space-y-2 md:space-y-4 text-[#45505b]">
            <h1 className="font-bold md:text-6xl text-3xl tracking-wider">Bello Adelani</h1>
            <div className="md:text-2xl text-xl text-teal-600 md:tracking-widest">
                <ul className="dynamic-txts">
                    <li><span>Software Developer</span></li>
                    <li><span>FrontEnd Engineer</span></li>
                    <li><span>Tech Enthusiast</span></li>
                </ul> 
            </div>
            <div className="space-x-6 flex items-center pt-3 text-2xl hover:text-teal-900">
                <a href="https://github.com/Adelani10">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/adelani-bello-51776b236/">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/laniplaydirty">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>
        </main>
    )
}