import React from "react";
import FlowingMenu from './FlowingMenu'

export default function ProjectsSection() {
    const demoItems = [
    { link: '#', text: 'Attendance App', image: 'https://picsum.photos/600/400?random=1', category: 'Platformer', date: '2024, March' },
    { link: '#', text: 'Digit.IO', image: 'https://picsum.photos/600/400?random=2', category: 'Platformer', date: '2024, March' },
    { link: '#', text: 'Rent A Stuff', image: 'https://picsum.photos/600/400?random=3', category: 'Platformer', date: '2024, March' },
    { link: '#', text: 'Give Me A Bucking Job', image: 'https://picsum.photos/600/400?random=4', category: 'Platformer', date: '2024, March' },
    ];

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-red-500">

            <div className="w-full p-2 xl:p-8 border-b-2 border-rm-main">
                <h1 className="font-fredoka text-2xl xl:text-4xl font-bold text-main">
                    <span className="bg-rm-special text-rm-primary">Featured</span> Projects
                </h1>
            </div>

            <div style={{ height: '600px', position: 'relative' }} className="flex w-full">
                <FlowingMenu items={demoItems}
                speed={15}
                textColor="#1f2421"
                bgColor="#e9f1f7"
                marqueeBgColor="#1f2421"
                marqueeTextColor="#FDF7FA"
                borderColor="#1f2421"
                />
            </div>


        </div>
    );
}