import React, { createContext } from "react";
import { useState } from "react";

const Utility = createContext()

function ToggleContext (props) {
    const [openNav, setOpenNav] = useState(false)

   function handleClick () {
    setOpenNav(!openNav)
   }

   function remove () {
    setOpenNav(false)
   }

    return(
        <Utility.Provider value={{openNav, handleClick, remove}}>
            {props.children}
        </Utility.Provider>
    )

}

export {Utility, ToggleContext}