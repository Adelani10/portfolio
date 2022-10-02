import React from "react";
import { useState } from "react";
import { projectsData } from "./data";



const btns = new Set( projectsData.map(item => {
        return item.category
    }))
const realBtns = ['all', ...btns]

export default function Projects () {
    const [openCategory, setOpenCategory] = useState(false)

    const buttons = realBtns.map((item, index)=> {
        const {category} = item
        return (
            <button key={index} className="py-1 md:py-2 capitalize font-bold bg-teal-400 rounded-sm text-[10px] md:text-[15px] lg:text-[18px] hover:bg-[#45505b] hover:text-white">
                {item}
            </button>
        )
    })

    // const prjs = 

    return (
        <section id="portfolio" className=" text-[#45505b] flex flex-col items-center py-12 h-screen bg-stone-300 px-2 md:px-44 space-y-8 ">
            <div className="flex flex-col items-center space-y-1">
                <h1 className="font-bold text-4xl capitalize">projects</h1>
                <div className="underline w-[40%] border-2 h-0 border-teal-800"></div>
            </div>

            <div className="w-full text-center space-y-6">
                <button 
                    onClick={() => setOpenCategory(!openCategory)} 
                    className="p-3 text-white rounded-sm bg-teal-800 hover:bg-teal-400 hover:text-[#45505b] font-bold">
                        Filter By Category
                </button>
                {openCategory && <section className="grid grid-cols-4 gap-2 md:gap-6">
                    {buttons}
                </section>}
            </div>

            <section className="md:grid md:grid-cols-3">

            </section>

        </section>
    )
}

