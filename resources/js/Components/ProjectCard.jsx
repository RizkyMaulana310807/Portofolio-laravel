import React from "react";

export default function ProjectCard({
    title,
    subtitle,
    number,
    image,
    icon,
    tags = [],
    playable = false,
    className = "",
}) {
    return (
        <div
            className={`transform bg-bright text-main p-2 xl:p-6 w-52 xl:w-80 border-4 border-secondary relative hover:scale-105 transition-all duration-300 ease-out rounded-2xl ${className}`}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <p className="text-md xl:text-2xl font-bold opacity-80">
                        {number}
                    </p>

                    <p className="text-xs xl:text-sm uppercase tracking-widest opacity-70">
                        {subtitle}
                    </p>
                </div>

                <div className="w-6 h-6 xl:w-8 xl:h-8 border-2 border-primary flex items-center justify-center rounded-md">
                    <i className={`fa-solid text-xs xl:text-base ${icon}`}></i>
                </div>
            </div>

            {/* Image */}
            <div className="border border-primary mb-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-32 xl:h-48 object-cover"
                />
            </div>

            {/* Title */}
            <h3 className="text-md xl:text-2xl font-bold">
                {title}
            </h3>

            {/* Subtitle */}
            <p className="text-special text-xs xl:text-sm font-semibold mb-4">
                {subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs bg-secondary px-2 py-1 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Play Button */}
            <div className="absolute bottom-[-20px] left-6">
                <div
                    className="
                        bg-special text-bright
                        w-10 h-10 xl:w-12 xl:h-12
                        flex items-center justify-center
                        rounded-full gap-2
                        hover:w-24 hover:rounded-full
                        hover:px-4 hover:justify-evenly
                        cursor-pointer
                        transition-all duration-200 ease-in-out
                        group
                    "
                >
                    <i className="fa-solid fa-play text-xs xl:text-base"></i>

                    <span
                        className="
                            hidden group-hover:block
                            text-xs xl:text-base
                            font-quicksand font-bold
                        "
                    >
                        {playable ? "Play" : "Check"}
                    </span>
                </div>
            </div>

            {/* Like Button */}
            <div className="absolute bottom-[-20px] right-6">
                <div
                    className="
                        bg-special text-bright gap-2
                        w-10 h-10 xl:w-12 xl:h-12
                        flex items-center justify-center
                        rounded-full
                        border-2 border-transparent
                        hover:border-accent
                        hover:bg-bright
                        hover:w-24
                        cursor-pointer
                        transition-all duration-200 ease-in-out
                        group
                    "
                >
                    <i
                        data-lucide="thumbs-up"
                        className="text-bright group-hover:text-accent text-xs xl:text-base"
                    ></i>

                    <span
                        className="
                            hidden group-hover:block
                            text-accent
                            text-xs xl:text-base
                            font-quicksand font-bold
                        "
                    >
                        200
                    </span>
                </div>
            </div>
        </div>
    );
}