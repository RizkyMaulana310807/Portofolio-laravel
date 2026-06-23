import React from "react";
import LogoDark from "../Assets/LogoDark.svg"
import GooeyNav from "./GooeyNav";
import GlareHover from './GlareHover'
import { SunMoon, Languages } from "lucide-react";
import { useState, useRef } from "react";

export default function Navbar() {

    const [mode, setMode] = useState("light");
    const [languages, setLanguages] = useState("en")
    
    const items = [
        { label: "Works", href: "#" },
        { label: "About", href: "#" },
        { label: "Certificate", href: "#" },
    ];

    return (
        <nav className="bg-rm-primary text-rm-main border-b-2 border-rm-secondary">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="relative flex items-center justify-center w-18 h-18">
                        <GlareHover
                            width="72px"
                            height="72px"
                            background="transparent"
                            borderColor="transparent"
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={300}
                        >
                            <img
                                src={LogoDark}
                                alt="Logo"
                                className="w-12 h-12"
                            />
                        </GlareHover>
                    </div>
                    {/* Menu Desktop */}
                    <div className="hidden lg:flex space-x-6">
                        <GooeyNav
                            items={items}
                            particleCount={15}
                            particleDistances={[90, 10]}
                            particleR={100}
                            initialActiveIndex={0}
                            animationTime={600}
                            timeVariance={300}
                            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        />

                    </div>

                    {/* Toggle Icon */}

                    <div className="flex flex-row gap-4">
                        <span onClick={() => setMode(mode === "light" ? "dark" : "light")} title={`Switch ${mode === "light" ? "Dark" : "Light"} Mode`} className={`p-3 rounded-full cursor-pointer transition-all duration-200 ease-in-out ${mode === "light" ? "bg-rm-primary" : "bg-rm-main text-rm-primary"}`}>
                            <SunMoon size={24} />
                        </span>
                        <span onClick={() => setLanguages(languages === "en" ? "id" : "en")} title={`Switch to ${languages === "en" ? "ID" : "EN"}`} className={`p-3 rounded-full cursor-pointer ${languages === "en" ? "bg-rm-primary" : "bg-rm-special text-rm-primary"}`}>
                            <Languages size={24} />
                        </span>
                    </div>

                </div>
            </div>
        </nav>
    );
}