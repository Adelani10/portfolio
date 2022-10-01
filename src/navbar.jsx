import React from "react";
import { useState } from "react";
import linksData from "./data";


export default function Navbar () {
    const [displayLinkName, setDisplayLinkName] = useState(false)

    return (
        <div className="fixed top-1/2 left-2 translate-y-[-50%] space-y-3 md:flex hidden flex-col text-[#f5f5f5]">
            {linksData.map((item, index) => {
                const {id, text, icon} = item
                return (
                    <a 
                        key={index}
                        href={`#${text}`} 
                        id={id}
                        onMouseEnter={(event)=> {
                            if (id == event.target.id){
                                setDisplayLinkName(true)
                            }else {
                                console.log(id)
                                console.log(event.target.id)
                            }
                        }}
                        onMouseLeave={()=> setDisplayLinkName(false)}
                        className={`flex items-center px-3 capitalize h-12 rounded-full transition-all ease-in-out duration-700 ${displayLinkName ? 'bg-teal-800 space-x-2 w-auto' : 'bg-white text-teal-800 w-12 justify-center'}`}>
                        {icon}
                         <p className={`${displayLinkName ? 'inline-block' : 'hidden'}`}>{text}</p>
                    </a>
                )
            })}
        </div>
    )
}