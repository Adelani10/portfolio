import React from "react";
import { useState } from "react";
import './index.css'

export default function Each ({id, live, image, name, summary, tools, githubRepo}) {
    const [seeMore, setSeeMore] = useState(false)


    return (
        <div key={id} className=" h-auto shadow-md shadow-neutral-500 rounded-sm">
                <a href={live} target='_blank' className="mx-auto flex flex-col items-center hover:shadow-lg shadow-black">
                    <img src={image} alt="image" className="w-full h-72 rounded-t-sm" />
                    <section className="font-bold flex items-center space-x-2 text-sky-400 py-2">
                        <h1 className=" text-sm ">visit</h1>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </section>
                    
                </a>

                <div className="py-3 px-3 space-y-4 ">
                    <h1 className="font-bold md:text-2xl text-xl">
                        {name}
                    </h1>
                    <p className="inline-block ">
                        {seeMore ? summary : `${summary.substring(0, 60)}`} <button onClick={()=> setSeeMore(!seeMore)} 
                        className=" text-sky-400">{seeMore ? 'see less' : 'see more'}</button>
                    </p>
                    <h3 className="font-bold text-black">TOOLS - {tools}</h3>
                    <a href={githubRepo} target='_blank' className="text-sky-400 block hover:text-sky-600">Github Repository</a>
                </div>
        </div>
    )
}