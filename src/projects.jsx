import React from "react";
import { useState } from "react";
import { projectsData } from "./data";
import Each from "./eachProject";



const btns = new Set( projectsData.map(item => {
        return item.category
    }))
const realBtns = ['all', ...btns]

export default function Projects () {
    const [openCategory, setOpenCategory] = useState(false)
    const [projects, setProjects] = useState(projectsData)

    function handleFilter(category) {
        const newArr = projectsData.filter(item => {
            if (category === item.category){
                return item
            }
        })

        if (category === 'all'){
                setProjects(projectsData)
        }
        else{
            setProjects(newArr)
        }
        
    }

    const buttons = realBtns.map((item, index)=> {
        return (
            <button 
                key={index} 
                onClick={() => handleFilter(item)} 
                className="py-2 tracking-tight md:py-2 capitalize font-bold bg-teal-400 rounded-sm  text-[12px] md:text-[15px] lg:text-[18px] hover:bg-[#45505b]">
                {item}
            </button>
        )
    })


    const prjs = projects.map((item, index) => {
            const {id, name, image, summary, tools, githubRepo, live} = item
            return (
                <Each name={name}
                        key={id}
                    image={image} 
                    summary={summary}
                    tools={tools}
                    githubRepo={githubRepo}
                    live={live}
                    />
            )
        })

    return (
        <section id="portfolio" className=" text-[#45505b] flex flex-col py-12 h-auto bg-stone-300 px-2 md:px-44 space-y-8 ">

            <div className="flex flex-col self-center items-center space-y-1">
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

            <section className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-3 lg:gap-8 space-y-12 lg:space-y-0">
                {prjs}
            </section>

            <p className="font-semibold pt-8 text-xl">Any suggestions? <a href="mailto: harounadelani@gmail.com" className="text-sky-400 font-bold">Email Me</a></p>

        </section>
    )
}

