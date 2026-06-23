import React from "react";
import { useState, useRef } from "react";
import ShinyText from './ShinyText';

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

                    <ShinyText
                        text="Available for freelance and full-time opportunities."
                        speed={2}
                        delay={0}
                        color="#1f2421"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                        className="font-fredoka font-bold text-8xl uppercase"
                    />

                </div>
                <div className="w-1/2 bg-yellow-500 p-8">
                    
                </div>
            </div>
        </div>
    );
}