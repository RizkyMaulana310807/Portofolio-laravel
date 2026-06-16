// HeroSection.jsx
import React from "react";
import ClickSpark from './ClickSpark';
import StarBorder from './StarBorder'
import SplitText from "./SplitText";

export default function HeroSection({
    mainRoleText,
    secondRoleText,
}) {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (

            <ClickSpark
            sparkColor="#1f2421"
            sparkSize={10}
            sparkRadius={55}
            sparkCount={8}
            duration={400}
            >
            <div className="w-screen h-screen flex flex-col xl:flex-row border-b-4 border-rm-secondary">

                <div className="w-full xl:w-1/2 h-full flex items-center justify-normal xl:justify-center">
                    <div className="max-w-xs text-left p-8 space-y-4">
                        <div className="inline-flex flex-col font-bold">
                            <p className="text-sm xl:text-baserole-title text-rm-special border-b xl:border-b-4 border-rm-main font-quicksand">
                                {mainRoleText}
                            </p>

                            <p className="text-sm xl:text-baserole-title text-rm-special border-t xl:border-t-4 border-rm-main font-quicksand">
                                {secondRoleText}
                            </p>
                        </div>

                        <SplitText
                            text="RIZKY MAULANA"
                            className="text-5xl xl:text-7xl font-bold tracking-widest font-fredoka text-rm-main"
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

                            <StarBorder
                            as="button"
                            className="animation"
                            color="magenta"
                            speed="5s"
                            thickness={5}
                            >
                            <i className="fa-solid fa-download text-sm xl:text-base"></i>
                            DOWNLOAD CV
                        </StarBorder>
                    </div>
                </div>

                <div className="w-full xl:w-1/2 h-full relative">
                </div>
            </div>
            </ClickSpark>

    );
}