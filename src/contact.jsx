import React from "react";
import { useState } from "react";



export default function Contact () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        comment: "",
        connect: false
    })  
    
    function handleChange (event) {
        const {type, value, name, checked } = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <section 
                id='contact' 
                className=" h-auto text-[#45505b] flex flex-col py-12 bg-zinc-200 px-2 md:px-44 space-y-12">
                    <div className="flex flex-col self-center items-center space-y-1">
                        <h1 className="font-bold text-4xl capitalize">contact</h1>
                        <div className="underline w-[40%] border-2 h-0 border-teal-800"></div>
                    </div>

                    <div className=" xl:flex xl:space-y-0 space-y-8">
                        <article className="flex flex-col space-y-4 xl:w-[30%] w-full">
                            <div className="flex items-center space-x-4">
                                <a href="https://twitter.com/laniplaydirty" className=" inline-block h-8 w-8 bg-stone-400 flex justify-center items-center rounded-full hover:text-teal-400">
                                    <i className="fa-solid fa-phone"></i>
                                </a>
                                <div>
                                    <h1 className="font-bold">Tel:</h1>
                                    <p>+234 909 0162 500</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <a href="https://twitter.com/laniplaydirty" className=" inline-block h-8 w-8 bg-stone-400 flex justify-center items-center rounded-full hover:text-teal-400">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                                <div>
                                    <h1 className="font-bold">Email:</h1>
                                    <p>harounadelani@gmail.com</p>
                                </div>
                            </div>
                        </article>

                        <form onSubmit={handleSubmit} className="xl:w-[70%] space-y-2 flex flex-col">
                            <div className="md:grid md:grid-cols-2 md:gap-4 space-y-2 md:space-y-0">
                                <input type="text" 
                                        name="name" 
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        className=" border-2 w-full px-3 border-stone-400 h-10 rounded-md"
                                 />

                                <input type="email" 
                                        name="email" 
                                        placeholder="Your Email"
                                        onChange={handleChange}
                                        className=" border-2 w-full px-3 border-stone-400 h-10 rounded-md"
                                 />
                            </div>

                            <input type="text" 
                                        name="subject" 
                                        placeholder="Subject"
                                        onChange={handleChange}
                                        className=" border-2 w-full px-3 border-stone-400 h-10 rounded-md"
                            />

                            <textarea name="comment" 
                                      rows="7" 
                                      placeholder="Share your thoughts..."
                                      onChange={handleChange}
                                      className="w-full px-3 border-2 border-stone-400 rounded-md"
                            />
                            <div className="flex items-center space-x-2 md:text-lg">
                                <input type="checkbox" 
                                       name="connect"  
                                       id="connect"
                                       checked={formData.connect}
                                       onChange={handleChange} 
                                />
                                <label htmlFor="connect" className="font-semibold">
                                    I'd love to connect as a dev.
                                </label>
                            </div>

                            <div className="h-4"></div>
                            <button type="submit" 
                                    className="bg-teal-800 py-2  font-bold text-center text-white rounded-full inline-block  tracking-widest self-center w-1/2 md:w-1/3 xl:w-1/4 hover:bg-teal-400">Send
                            </button>
                        </form>
                    </div>

                    
                </section>
    )
}