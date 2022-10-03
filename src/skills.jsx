import React from "react";
import { useState } from "react";


export default function Skills () {
    return (
        <section 
                id='services' 
                className=" h-auto text-[#45505b] flex flex-col items-center py-12 bg-stone-400 px-2 md:px-44 space-y-8">
                    <div className="flex flex-col self-center items-center space-y-1">
                            <h1 className="font-bold text-4xl capitalize">skills</h1>
                            <div className="underline w-[40%] border-2 h-0 border-teal-800"></div>
                    </div>
        </section>
    )
}