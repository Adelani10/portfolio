import React from "react";
import { useState } from "react";

export default function Projects () {
    return (
        <section id="portfolio" className=" text-[#45505b] flex flex-col items-center py-12 h-screen bg-stone-300 px-3 md:px-44 space-y-8 border-2">
            <div className="flex flex-col items-center space-y-1">
                <h1 className="font-bold text-4xl capitalize">projects</h1>
                <div className="underline w-[40%] border-2 h-0 border-teal-800"></div>
            </div>
            <div className="p-3">
                <button className="p-3 text-white rounded-md bg-teal-800 hover:bg-teal-400 hover:text-[#45505b]">
                    Filter By Category
                </button>
                <section>
                    
                </section>
            </div>
        </section>
    )
}

