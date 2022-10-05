import React from "react";
import { skillsData } from "./data";


export default function Skills () {


    const skills = skillsData.map(item => {
        const {id, image, name, text} = item
        return (
            <div key={id} className="hover:bg-[#f5f5f5] h-auto flex rounded-md flex-col items-center py-8 px-4 space-y-3 shadow-black hover:shadow-md">
                <img src={image} alt="" className="w-[30%] h-42 block object-contain" />
                <h2 className="text-xl md:text-2xl capitalize font-semibold">{name}</h2>
                <p className="text-center text">{text}</p>
            </div>
        )
    })
    return (
        <section 
                id='services' 
                className=" h-auto text-[#45505b] flex flex-col py-12 bg-stone-200 px-8 md:px-44 space-y-8">
                    <div className="flex flex-col self-center items-center space-y-1">
                            <h1 className="font-bold text-4xl capitalize">skills</h1>
                            <div className="underline w-[40%] border-2 h-0 border-teal-800"></div>
                    </div>

                    <h2 className="text-teal-800 font-semibold text-center">As a frontend developer, the following are the tools I possess to develop client-side software.</h2>
                    <section className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 space-y-6 md:space-y-0">
                            {skills}                        
                    </section>
        </section>
    )
}