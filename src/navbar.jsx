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
    const styles = {
        transform: openNav ? 'translateX(0)' : 'translateX(-100%)'
    }

    return (
        <>
            <div className='fixed space-y-3 hidden md:flex flex-col text-[#f5f5f5] top-1/2 left-2 translate-y-[-50%]'>
                {displayLinks}
            </div>
            
            <div style={styles} className="h-screen -translate-x-full top-0 left-0 md:hidden fixed flex flex-col justify-evenly bg-[#45505b] w-[80%] px-3 z-50 transition-all ease-in-out duration-500">
                <div className="flex flex-col justify-center space-y-3 place-items-center">
                    {displayLinks}
                </div>
                <a 
                    href="cv.bello.pdf" 
                    onClick={remove}
                    download 
                    className="text-2xl inline-block self-center text-white py-2 px-3 tracking-widest rounded-sm hover:bg-[#f5f5f5] hover:text-[#45505b]">
                <i className="fa-solid fa-download"></i> Resume
                </a>

            </div>
        </>
        
    )
}