import React from "react";

export default function Footer () {
    return (
        <footer className=" h-auto text-[#45505b] flex flex-col items-center py-6 bg-stone-300 px-2 md:px-44 space-y-8">
            <div className="space-y-4">
                <h1 className="font-bold text-3xl md:text-5xl text-center text-teal-800">Adelani Bello</h1>
                <p className="font-pop text-center">
                    A software developer striving to continuously improve my skills through creating and implementing beautiful and efficient user-interfaces and experience.
                </p>
            </div>

            <div className="space-x-6 flex items-center text-stone-200 text-2xl">
                <a href="https://github.com/Adelani10" className="h-10 inline-block w-10 bg-stone-400 flex justify-center items-center rounded-full hover:text-teal-400">
                    <i className="fa-brands fa-github inline-block"></i>
                </a>
                <a href="https://www.linkedin.com/in/adelani-bello-51776b236/" className="inline-block h-10 w-10 bg-stone-400 flex justify-center items-center rounded-full hover:text-teal-400">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/laniplaydirty" className=" inline-block h-10 w-10 bg-stone-400 flex justify-center items-center rounded-full hover:text-teal-400">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>

            <p className="md:text-lg text-center"> 2022 &copy; <span className="font-bold text-black">Bello Adelani</span>. All Rights Reserved.</p>
            
        </footer>
    )
}
