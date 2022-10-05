import React from "react";
import { useState } from "react";
import {linksData} from "./data";
import Nav from "./eachNav";
// import { useRef } from "react";



export default function Navbar ({openNav, remove}) {

    const displayLinks = linksData.map((item, index) => {
                            const {id, text, icon} = item
                            return <Nav id={id}
                                        key={index}
                                        text={text}
                                        icon={icon}
                                        openNav={openNav}
                                        remove={remove}
                            />
                        })


    return (
        <div 
            className=
            {`${openNav ? 'h-screen top-0 left-0 translate-y-0 justify-center translate-x-[0] ease-in bg-stone-400 w-[60%] px-3 z-50' 
                : 'top-1/2 left-2 translate-y-[-50%] translate-x-[-100%] md:translate-x-0 ease-out'} 
            transition-all  duration-500 fixed space-y-3 flex flex-col text-[#f5f5f5]`}
            >
            {displayLinks}
        </div>
    )
}