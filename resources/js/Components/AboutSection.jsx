import React from "react";
import { useState } from "react";

export default function AboutSection({ aboutText }) {
    const [tab, setTab] = useState("about");

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
        <div className="w-screen flex">
            <div className="w-screen h-full border-4 border-darker p-4 xl:p-8">
                <div className="flex flex-col items-center justify-center h-full">

                    {/* Menu */}
                    <div className="bg-rm-primary inline-flex rounded-md border-4 border-darker">
                        <button
                            onClick={() => setTab("about")}
                            className={`px-6 py-3 transition font-bold ${
                                tab === "about"
                                    ? "bg-special/10 text-special"
                                    : "text-main hover:bg-darker"
                            }`}
                        >
                            ABOUT
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mt-6 h-full w-full">

                        {tab === "about" && (
                            <div className="flex flex-col xl:flex-row h-full w-full gap-6 xl:gap-0">

                                {/* Pendidikan */}
                                <div className="w-full xl:w-1/2 h-full flex p-2 xl:p-6">
                                    <div className="w-full space-y-2 bg-bright p-4 rounded-2xl shadow-xl">

                                        <div className="flex flex-row justify-between w-full items-center">
                                            <span className="font-quicksand bg-bright rounded-full p-2 font-bold text-xs xl:text-base">
                                                Riwayat Pendidikan
                                            </span>

                                            <span className="font-quicksand bg-special/90 rounded-full text-xs xl:text-base px-2 py-1 font-bold text-bright">
                                                On Going
                                            </span>
                                        </div>

                                        <div
                                            id="timelineRiwayatPendidikan"
                                            className="w-full mx-auto"
                                        >
                                            {/* Timeline Component */}
                                        </div>
                                    </div>
                                </div>

                                {/* Profile */}
                                <div className="w-full xl:w-1/2 h-full flex flex-col justify-evenly items-center p-6 bg-bright rounded-2xl shadow-2xl relative gap-8">

                                    <div
                                        id="mouseCircle"
                                        className="w-12 h-12 xl:w-36 xl:h-36 rounded-full bg-accent absolute z-10 hidden xl:left-95 xl:top-37 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                                    />

                                    <div
                                        id="mouseMovementArea"
                                        className="w-full h-full absolute bg-red-500/0 z-50 rounded-2xl"
                                    />

                                    <div className="flex items-start w-full space-x-14">
                                        <h1 className="text-2xl xl:text-6xl font-fredoka font-semibold z-20">
                                            Rizky
                                            <br />
                                            Maulana
                                        </h1>

                                        <img
                                            src="https://i.pinimg.com/736x/a2/22/cf/a222cfa4df0596e6a490b96a06561cd1.jpg"
                                            alt="pfp"
                                            className="h-18 xl:h-32 rounded-full border-4 border-darker z-20"
                                        />
                                    </div>

                                    <div className="flex">
                                        <p className="text-xs xl:text-base font-quicksand font-semibold z-20">
                                            {aboutText}
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex w-full flex-col gap-4">

                                        <div className="flex">
                                            <h1 className="font-fredoka font-bold text-base xl:text-2xl underline underline-main text-main">
                                                SKILLS
                                            </h1>
                                        </div>

                                        <div className="flex gap-6 justify-center items-center">
                                            {skills.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white border border-main/5 p-4 hover:border-main/20 cursor-pointer transition-all duration-200 ease-in-out z-90"
                                                >
                                                    <i
                                                        className={`fa-brands ${skill.icon} text-xl xl:text-6xl`}
                                                        style={{
                                                            color: skill.color,
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}