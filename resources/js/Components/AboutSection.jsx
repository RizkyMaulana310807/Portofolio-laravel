import React from "react";
import { useState, useRef } from "react";
import TextPressure from './TextPressure';
import VariableProximity from "./VariableProximity";

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
        <div className="w-screen h-screen flex flex-col bg-red-500">
            <p>Drop me a letter</p>
            {/* content */}
            <div className="flex flex-row gap-4 bg-blue-500 h-full p-6">
                <div className="w-1/2 bg-yellow-500 p-8 relative">
                    <TextPressure
                        text="Let's build your idea to reality"
                        flex
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic
                        textColor="#ffffff"
                        strokeColor="#5227FF"
                        minFontSize={36}
                        className="font-fredoka font-bold text-8xl"
                    />

                    <VariableProximity
                        label={'Testing font size variable proxymity'}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />

                </div>
                <div className="w-1/2 bg-yellow-500 p-8">

                </div>
            </div>
        </div>
    );
}