import React from "react";
import { useState } from "react";

export default function About () {
    return (
        <section 
                id='about' 
                className=" h-auto text-[#45505b] flex flex-col items-center py-12 bg-stone-200 px-3 md:px-44 space-y-8">
            <div className="flex flex-col items-center space-y-1">
                <h1 className="font-bold text-4xl capitalize">about</h1>
                <div className="underline w-[40%] border-2 h-0 border-teal-800"></div>
            </div>
            <p className="text-center">
                I am a creative, detail-oriented, customer/user focused, software developer with drive to continuously improve my skills. I have a proven track record of creating and implementing successful frontend web applications. Currently, I'm looking to bring my skills to a tech company with a local or global reach, targeting solid internships, as well as junior front-end roles.
            </p>
            <article className="flex flex-col space-y-6 pt-4">
                <section className="space-y-2">
                    <h1 className="font-bold text-teal-800 text-2xl">Front-End Developer</h1>
                    <p className="italic">
                        Utilizing my skills in the front-end development, I am able to create and implement web applications that are both functional and visually appealing while maintaining a detailed git history for all projects I work on.
                    </p>
                </section>
                
                <article className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-angles-right text-teal-800"></i>
                        <h4>Website:  <a href="https://belloadelani.netlify.app/" className="font-bold text-teal-400 hover:text-teal-800"> belloadelani.netlify.app</a></h4>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-angles-right text-teal-800"></i>
                        <h4>Location:  <span className="font-bold capitalize"> Lagos, Nigeria.</span></h4>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-angles-right text-teal-800"></i>
                        <h4>Email:  <a href="mailto: harounaadelani@gmail.com" className="font-bold text-teal-400 hover:text-teal-800">harounadelani@gmail.com</a></h4>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-angles-right text-teal-800"></i>
                        <h4>Tel:  <a href="mailto: harounaadelani@gmail.com" className="font-bold ml-2 text-teal-400 hover:text-teal-800">harounadelani@gmail.com</a></h4>
                    </div> */}
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-angles-right text-teal-800"></i>
                        <h4>Freelance:  <span className="font-bold capitalize ml-2">available</span></h4>
                    </div>
                </article>
            </article>
            
        </section>

    )
}