import React from "react";
import { useState } from "react";
import './index.css'

export default function Each ({id, live, image, name, summary, tools, githubRepo}) {
    const [seeMore, setSeeMore] = useState(false)


    return (
        <div key={id} className=" h-auto border-2">
                <a href={live} target='_blank' className="mx-auto flex flex-col items-center hover:shadow-lg shadow-black">
                    <img src={image} alt="" className="w-full md:object-fill" />
                    <section className="font-bold flex items-center space-x-2 text-sky-400">
                        <h1 className="md:text-2xl text-xl ">visit</h1>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </section>
                    
                </a>

                <div className="py-3 px-3 space-y-4 ">
                    <h1 className="font-bold md:text-2xl text-xl">
                        {name}
                    </h1>
                    <p className="capitalize inline-block ">
                        {seeMore ? summary : `${summary.substring(0, 60)}`} <button onClick={()=> setSeeMore(!seeMore)} className="capitalize text-sky-400">{seeMore ? 'see less' : 'see more'}</button>
                    </p>
                    <h3 className="font-bold text-black">TOOLS - {tools}</h3>
                    <a href={githubRepo} target='_blank' className="text-sky-400 block hover:text-sky-600">Github Repository</a>
                </div>
        </div>
    )
}