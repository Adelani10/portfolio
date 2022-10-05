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
            
            <div style={styles} className="h-screen -translate-x-full top-0 left-0 md:hidden flex flex-col fixed space-y-3 justify-center bg-[#45505b] w-[80%] px-3 z-50 transition-all ease-in-out duration-500">
                {displayLinks}
            </div>
        </>
        
    )
}