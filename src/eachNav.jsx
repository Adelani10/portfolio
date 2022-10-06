import React from "react";
import { useState } from "react";
import { Link } from "react-scroll"

export default function Nav ({id, text, icon, openNav, remove}) {
    const [isHovered, setIsHovered] = useState(false)

    // return (
    //     <a 
    //         key={id}
    //         href={`#${text}`} 
    //         id={id}
    //         onMouseEnter={()=> setIsHovered(true)}
    //         onMouseLeave={()=> setIsHovered(false)}
    //         className={`${isHovered ? 'bg-teal-800 w-36' 
    //         : openNav ? 'w-full text-teal-800 bg-white hover:text-' 
    //         : !isHovered ? 'bg-white text-teal-800 w-12 justify-center' 
    //         : ''} 
    //         flex items-center px-3 capitalize h-12 rounded-full transition-all ease-in-out duration-500 space-x-2`}>
    //             {icon}
    //         <p className={`${isHovered || openNav ? 'inline-block' : 'hidden'} md:tracking-widest tracking-wider`}>{text}</p>
    //     </a>
    // )

    if (!openNav){
        return (
            <Link 
                key={id}
                to={text} spy={true} smooth={true} offset={0} duration={500} 
                id={id}
                onMouseEnter={()=> setIsHovered(true)}
                onMouseLeave={()=> setIsHovered(false)}
                className={`${isHovered ? 'bg-teal-800 space-x-2 w-32' 
                : 'bg-white text-teal-800 w-12 justify-center'} box-border flex items-center px-3 capitalize h-12 rounded-full transition-all ease-in-out duration-500`}>
                    {icon}
                <p className={`${isHovered  ? 'inline' : 'hidden'} text-pop`}>{text}</p>
            </Link>
    )}
     else if (openNav){
        return (
            <Link 
                key={id}
                to={text} spy={true} smooth={true} offset={0} duration={500} 
                onClick={remove}
                id={id}
                className={`bg-white w-full flex items-center px-4 text-teal-800 capitalize h-12 rounded-full transition-all ease-in-out duration-500 hover:text-white hover:bg-teal-800 space-x-4`}>
                    {icon}
                <p className='tracking-widest'>{text}</p>
            </Link>)
    }
}