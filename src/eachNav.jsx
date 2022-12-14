import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll"
import { useContext } from 'react'
import { Utility } from './ToggleContext'

export default function Nav ({id, text, icon}) {
    const [isHovered, setIsHovered] = useState(false)
    const [isPresentlyAt, setIsPresentlyAt] = useState({
        home: false,
        about: false,
        skills: false,
        services: false,
        contact: false
    })

//     useEffect(()=>{
//     function handleScroll () {
//       const scrollHeight = window.pageYOffset
//       if (scrollHeight >= 720 && scrollHeight <  1460){
//         setIsPresentlyAt(prev => {
//             return {
//                 ...prev, about: true
//             }
//         })
//       }
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener(scroll, handleScroll)
//   }, [isPresentlyAt])

    const {openNav, remove} = useContext(Utility)

    if (!openNav){
        return (
            <Link 
                key={id}
                to={text} spy={true} smooth={true} offset={0} duration={500} 
                onMouseEnter={()=> setIsHovered(true)}
                onMouseLeave={()=> setIsHovered(false)}
                className={`${isHovered ? 'bg-teal-800 space-x-2 w-32' 
                : 'bg-white text-teal-800 w-12 justify-center'} 
                flex items-center px-3 capitalize h-12 rounded-full transition-all ease-in-out duration-500`}
                >
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
                className={`bg-white w-full flex items-center px-4 text-teal-800 capitalize h-12 rounded-full transition-all ease-in-out duration-500 hover:text-white hover:bg-teal-800 space-x-4`}>
                    {icon}
                <p className='tracking-widest'>{text}</p>
            </Link>)
    }
}