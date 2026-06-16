import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Pengalaman Magang",
            subtitle: "GAMELAB INDONESIA",
            number: "01",
            image: "https://www.gamelab.id/img/share-v3.png?v=3.12",
            tags: [
                "Intern",
                "Javascript",
                "Phaser.JS",
                "Game Developer",
            ],
            icon: "fa-briefcase",
            playable: false,
        },
        {
            title: "Pengalaman Freelance",
            subtitle: "SMKN 4 Padalarang",
            number: "02",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Logosmkn4padalarang.jpg/250px-Logosmkn4padalarang.jpg",
            tags: [
                "Freelance",
                "Phaser.JS",
                "Laravel",
                "MySQL",
                "React Native",
            ],
            icon: "fa-briefcase",
            playable: false,
        },
    ];

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">

            <div className="w-full p-2 xl:p-8">
                <h1 className="font-fredoka text-2xl xl:text-4xl font-bold text-main">
                    My Favorite Projects
                </h1>
            </div>

            <div
                id="track"
                className="flex flex-row items-center overflow-x-scroll overflow-y-hidden project-card"
                style={{
                    width: "100vw",
                    height: "100%",
                    flexWrap: "nowrap",
                    gap: "2rem",
                    padding: "0 2rem",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.number}
                        title={project.title}
                        subtitle={project.subtitle}
                        number={project.number}
                        image={project.image}
                        tags={project.tags}
                        icon={project.icon}
                        playable={project.playable}
                    />
                ))}
            </div>

        </div>
    );
}