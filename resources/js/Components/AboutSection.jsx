import React from "react";
import { useState, useRef } from "react";
import ScrollFloat from "./ScrollFloat";

export default function AboutSection({ aboutText }) {
    const [tab, setTab] = useState("about");
    const containerRef = useRef(null);


    const skills = [
        {
            icon: "fa-php",
            color: "#777BB4",
        },
        {
            icon: "fa-laravel",
            color: "#FF2D20",
        },
        {
            icon: "fa-js",
            color: "#F7DF1E",
        },
        {
            icon: "fa-react",
            color: "#61DAFB",
        },
    ];

    const categories = [
        {
            name: 'Project Inquiry'
        },
        {
            name: 'Collaboration'
        },
        {
            name: 'Job Opportunity'
        },
        {
            name: 'Bug Report'
        },
        {
            name: 'General Question'
        },
        {
            name: 'Other'
        },
    ]

    
    return (
        <div className="w-screen h-screen flex flex-col bg-red-500">
            {/* content */}
            <div className="flex flex-row gap-4 h-full">
                <div className="w-1/2 p-8 relative flex flex-col items-center justify-center">
                    <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    textClassName="font-fredoka font-bold"
                    >
                    Drop me a letter
                    </ScrollFloat>

                    <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    textClassName="text-2xl font-fredoka font-bold"
                    >
                    Ready to make something shitting together?
                    </ScrollFloat>


                </div>
                <div className="w-1/2 bg-yellow-500 p-8 m-8 flex flex-col justify-center">
                    <div className="">
                        <h3 className="font-quicksand font-bold">Say hello - <span>maulana.rizky@gmail.com</span></h3>
                    </div>
                    <div className="flex flex-col justify-center space-y-8">
                        {/* identity input */}
                        <div className="flex flex-col gap-4 ">
                            <h3 className="font-quicksand font-bold"><span>01</span> - Identity Information</h3>
                            <div className="flex flex-row gap-8">
                                {/* name */}
                                <div className="relative w-full max-w-md">
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder=" "
                                        className="peer h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />

                                    <label
                                        for="username"
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200
                                            peer-focus:top-0
                                            peer-focus:-translate-y-1/2
                                            peer-focus:text-xs
                                            peer-focus:text-blue-600
                                            peer-not-placeholder-shown:top-0
                                            peer-not-placeholder-shown:-translate-y-1/2
                                            peer-not-placeholder-shown:text-xs">
                                        Name
                                    </label>
                                </div>

                                {/* email */}
                                <div className="relative w-full max-w-md">
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder=" "
                                        className="peer h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />

                                    <label
                                        for="username"
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200
                                            peer-focus:top-0
                                            peer-focus:-translate-y-1/2
                                            peer-focus:text-xs
                                            peer-focus:text-blue-600
                                            peer-not-placeholder-shown:top-0
                                            peer-not-placeholder-shown:-translate-y-1/2
                                            peer-not-placeholder-shown:text-xs">
                                        Email address
                                    </label>
                                </div>
                            </div>    
                        </div>

                        {/* category input */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-quicksand font-bold"><span>02</span> - Select a category</h3>
                            <div className="grid grid-cols-3 gap-3 w-full">
                                {categories.map((item, index) => (
                                    <button
                                        key={index}
                                        className="
                                            h-12
                                            rounded-full
                                            border
                                            border-zinc-300
                                            bg-white
                                            text-zinc-700
                                            font-medium
                                            transition-all
                                            duration-200
                                            hover:bg-zinc-100
                                            hover:border-zinc-400
                                            active:scale-95
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* form input */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-quicksand font-bold"><span>03</span> - Write a message</h3>
                            <div className="relative w-full">
                                <textarea
                                    id="message"
                                    placeholder=" "
                                    rows={6}
                                    className="peer w-full h-24 max-h-60 resize-none overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-6 pb-4 text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />

                                <label
                                    for="message"
                                    className=" absolute left-3 top-4 bg-white px-1 text-[16px] text-gray-500 transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-blue-600 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12px]"
                                >
                                    Message
                                </label> 
                            </div>
                        </div>
                        
                        {/* button */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-quicksand font-bold"><span>04</span> - Send now</h3>
                            <div className="grid grid-cols-3 gap-3 w-full">
                                <button
                                    className="h-12 rounded-full border border-zinc-300 bg-white text-zinc-700 font-medium transition-all duration-200 hover:bg-zinc-100 hover:border-zinc-400 active:scale-95 flex items-center justify-center"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}