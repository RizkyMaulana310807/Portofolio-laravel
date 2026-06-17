import React from "react";
import LogoDark from "../Assets/LogoDark.svg"
import GooeyNav from "./GooeyNav";
export default function Navbar() {
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
                    <div className="flex items-center font-quicksand space-x-2 text-rm-primary p-4 rounded-l-md">
                    <img
                        src={LogoDark}
                        alt="Logo"
                        className="w-10 h-10"
                    />

                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden lg:flex space-x-6">
                        {/* <a
                            href="/"
                            className="font-quicksand font-bold hover:underline hover:underline-offset-4 text-md transition duration-200 ease-in-out"
                        >
                            WORKS
                        </a>

                        <a
                            href="/about"
                            className="font-quicksand font-bold hover:underline hover:underline-offset-4 text-md transition duration-200 ease-in-out"
                        >
                            ABOUT
                        </a>

                        <a
                            href="/contact"
                            className="font-quicksand font-bold hover:underline hover:underline-offset-4 text-md transition duration-200 ease-in-out"
                        >
                            CERTIFICATE
                        </a> */}
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

                    {/* Social Icons */}
                    <div className="hidden md:flex space-x-6 pr-4">

                        <div
                            className="
                                icon
                                w-12 h-12 p-2
                                bg-rm-secondary
                                flex items-center justify-center
                                rounded-full
                                border-3 border-transparent
                                hover:border-rm-main
                                hover:bg-rm-main
                                transition-all duration-250 ease-in-out
                                group cursor-pointer
                            "
                        >
                            <i className="fa-brands fa-linkedin text-[#0A66C2] text-2xl group-hover:text-rm-bright"></i>
                        </div>

                        <div
                            className="
                                icon
                                w-12 h-12 p-2
                                bg-rm-secondary
                                flex items-center justify-center
                                rounded-full
                                border-3 border-transparent
                                hover:border-rm-main
                                hover:bg-rm-main
                                transition-all duration-250 ease-in-out
                                group cursor-pointer
                            "
                        >
                            <i className="fa-brands fa-github fa-2xl group-hover:text-rm-bright"></i>
                        </div>

                        <div
                            className="
                                icon
                                w-12 h-12 p-2
                                bg-rm-secondary
                                flex items-center justify-center
                                rounded-full
                                border-3 border-transparent
                                hover:border-rm-main
                                hover:bg-rm-main
                                transition-all duration-250 ease-in-out
                                group cursor-pointer
                            "
                        >
                            <i className="fas fa-envelope fa-xl text-[#EA4335] group-hover:text-rm-bright"></i>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
}