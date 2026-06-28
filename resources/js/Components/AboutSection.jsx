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

    
    return (
        <div className="w-screen h-screen flex flex-col">
            <p>Drop me a letter</p>
            {/* content */}
            <div className="flex flex-row gap-4 h-full p-6">
                <div className="w-1/2 p-8 relative flex items-center justify-center">

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
                <div className="w-1/2 bg-yellow-500 p-8">
                    
                </div>
            </div>
        </div>
    );
}