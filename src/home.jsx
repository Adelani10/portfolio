import React from "react";
import { useState } from "react";
import linksData from "./data";

export default function Home () {
    return (
        <main id="home" className=" container mx-auto md:px-44 flex flex-col justify-center h-screen space-y-2 md:space-y-4 text-[#45505b]">
            <h1 className="font-bold md:text-6xl text-3xl  self-center md:self-start tracking-wider">Bello Adelani</h1>
            <p className=" self-center text-2xl md:self-start text-teal-600 md:tracking-widest">Software Developer</p>
            <div className="space-x-6 self-center md:self-start flex items-center pt-3 text-2xl hover:text-teal-900">
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