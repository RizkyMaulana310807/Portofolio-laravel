// HeroSection.jsx
import React from "react";
import StarBorder from './StarBorder'
import SplitText from "./SplitText";
import TextType from './TextType';
import CountUp from "./CountUp";
import ProfileCard from './ProfileCard'
import Profile from '../Assets/profile.webp'
import LogoDark from "../Assets/LogoDark.svg"

export default function HeroSection({
    mainRoleText,
    secondRoleText,
}) {
    const stats = [
    {
        count: 100,
        title: "Mobile Project"
    },
    {
        count: 50,
        title: "Web Project"
    },
    {
        count: 25,
        title: "Website Deployed"
    }
];
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (

            <div className="w-screen h-screen flex flex-col xl:flex-row border-b-4 border-rm-secondary">

                <div className="w-full xl:w-1/2 h-full flex items-center justify-normal xl:justify-center">
                    <div className="text-left p-8 space-y-4 h-[90%] w-[90%] flex flex-col">

                    <div className="flex flex-col font-bold">
                        <p className="text-sm xl:text-baserole-title text-rm-special font-quicksand">
                            {mainRoleText} - {secondRoleText}
                        </p>
                    </div>

                    <SplitText
                        text="IDEAS INTO REALITY"
                        className="text-5xl xl:text-8xl font-bold tracking-widest font-fredoka text-rm-main"
                        delay={175}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="start"
                        onLetterAnimationComplete={handleAnimationComplete}
                        showCallback
                    />

                    <TextType 
                        text={["Turning ideas into powerful digital solutions.", "Developing games where code brings imagination to life.", "Combining technology, design, and creativity to solve real problems."]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="</>"
                        deletingSpeed={50}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                        className="font-quicksand text-2xl"
                    />


                    <StarBorder
                        as="button"
                        className="animation w-1/2"
                        color="magenta"
                        speed="5s"
                        thickness={5}
                    >
                        <i className="fa-solid fa-download text-sm xl:text-base"></i>
                        DOWNLOAD CV
                    </StarBorder>

                    <div className="flex gap-8">
                        {stats.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="flex flex-row">
                                    <p className="font-fredoka font-bold text-rm-special text-4xl">
                                        +
                                    </p>

                                    <CountUp
                                        from={0}
                                        to={item.count}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text text-4xl"
                                        delay={0}
                                    />

                                    <p className="font-fredoka font-bold text-4xl text-transparent">
                                        +
                                    </p>
                                </div>

                                <div>
                                    <h1 className="text-xl font-fredoka font-bold underline decoration-rm-special">
                                        {item.title}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    </div>
                </div>

                <div className="w-full xl:w-1/2 h-full relative flex justify-center">
                <div className="w-[90%] h-[90%] flex items-center justify-center">
                    <ProfileCard
                        name="Rizky Maulana"
                        title="Fullstack Engineer"
                        handle="rzkymaulana"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl={Profile}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => window.open("https://linkedin.com/in/rzkymaulana")}
                        behindGlowColor="rgba(125, 190, 255, 0.67)"
                        iconUrl={LogoDark}
                        behindGlowEnabled
                        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                    />
                </div>
                </div>
            </div>

    );
}