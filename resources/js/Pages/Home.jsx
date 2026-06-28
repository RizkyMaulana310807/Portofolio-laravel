import React from "react";
import { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import ProjectsSection from "../Components/ProjectSection";
import AboutSection from "../Components/AboutSection";
import FooterSection from "../Components/FooterSection";
// import Navbar from "@/Components/Navbar";
import ClickSpark from "@/Components/ClickSpark";
import Lenis from "lenis";


export default function Home(props) {
        useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <ClickSpark
            sparkColor="#1f2421"
            sparkSize={10}
            sparkRadius={55}
            sparkCount={8}
            duration={400}
        >
            <div className="bg-rm-primary">
                <HeroSection
                    mainRoleText={props.mainRoleText}
                    secondRoleText={props.secondRoleText}
                />

                <ProjectsSection />

                <AboutSection
                    aboutText={props.aboutText}
                />

                <FooterSection
                    mainRoleText={props.mainRoleText}
                    secondRoleText={props.secondRoleText}
                />
            </div>
        </ClickSpark>

    );
}