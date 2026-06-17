import React from "react";
import SplitText from "./SplitText";

// FooterSection.jsx

export default function FooterSection({
    mainRoleText,
    secondRoleText,
}) {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="xl:w-screen flex py-8">
            <div className="w-screen h-full bg-rm-primary mx-6 xl:mx-16 p-4 xl:p-8 rounded-2xl space-y-4 xl:space-y-16 border-4 border-rm-darker">

                <div className="flex flex-row justify-between w-full">
                    <h1 className="sm:text-xs text-base w-full font-quicksand">
                        Rizky Maulana
                    </h1>

                    <h3 className="text-xs w-full text-end">
                        {mainRoleText} / {secondRoleText}
                    </h3>
                </div>

                <div className="border-b-4 border-rm-darker"></div>

                <div className="flex flex-row items-center justify-center">
                    {/* <h1 className="slogan font-bold text-xs xl:text-2xl">
                        Driven by <span className="text-[#1B9AAA]">Logic</span>,
                        Powered by <span className="text-[#FFBA08]">Code</span>,
                        and Tuned for
                        <span className="text-[#D00000]">Performance</span>
                        (literally 🏍️💨🚀).
                    </h1> */}
                    <SplitText
                        text="Driven By Logic Powered By Code And Tuned For Performance (literally 🏍️💨🚀)."
                        className="text-2xl font-semibold text-center"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                        showCallback
                    />

                </div>

                <div className="border-b-4 border-rm-darker"></div>

                <div className="flex flex-col xl:flex-row justify-start gap-4 xl:gap-2 w-full">

                    <div className="xl:w-1/3">
                        <h1 className="font-bold">Rizky Maulana</h1>
                    </div>

                    <div className="flex flex-row gap-6 xl:gap-2 w-full">

                        {/* Navigations */}
                        <div className="space-y-1 xl:space-y-2 flex flex-col w-full">
                            <h1 className="font-bold text-xs xl:text-lg">
                                Navigations
                            </h1>

                            <a
                                href="#about"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                About
                            </a>

                            <a
                                href="#projects"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                Projects
                            </a>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                CV
                            </a>
                        </div>

                        {/* Tech Focus */}
                        <div className="space-y-1 xl:space-y-2 flex flex-col w-full">
                            <h1 className="font-bold text-xs xl:text-lg">
                                Tech Focus
                            </h1>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                Laravel/PHP
                            </a>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                React Native
                            </a>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                TailwindCSS
                            </a>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                JavaScript
                            </a>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out"
                            >
                                Anime.js
                            </a>
                        </div>

                        {/* Social */}
                        <div className="space-y-1 xl:space-y-2 flex flex-col w-full">
                            <h1 className="font-bold text-xs xl:text-lg">
                                Let's Connect
                            </h1>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out group"
                            >
                                Linkedin{" "}
                                <i className="fa-brands fa-linkedin text-main text-xs xl:text-2xl group-hover:text-blue-500"></i>
                            </a>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out group"
                            >
                                Instagram{" "}
                                <i className="fa-brands fa-instagram text-main text-xs xl:text-2xl group-hover:text-blue-500"></i>
                            </a>

                            <a
                                href="#"
                                className="text-xs xl:text-base underline underline-offset-4 decoration-dotted hover:text-blue-500 transition-all duration-200 ease-in-out group"
                            >
                                Github{" "}
                                <i className="fa-brands fa-github text-main text-xs xl:text-2xl group-hover:text-blue-500"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="border-b-4 border-rm-darker"></div>

                <div className="flex flex-row justify-between p-4 xl:p-0">
                    <h1 className="text-xs xl:text-base font-light font-fredoka">
                        Copyright Rizky Maulana
                    </h1>

                    <h1 className="text-xs xl:text-base font-light font-fredoka">
                        Rizky Maulana, 2026
                    </h1>
                </div>

            </div>
        </div>
    );
}