import React from "react";
import HeroSection from "../Components/HeroSection";
import ProjectsSection from "../Components/ProjectSection";
import AboutSection from "../Components/AboutSection";
import FooterSection from "../Components/FooterSection";
import Navbar from "@/Components/Navbar";

export default function Home(props) {
    return (
        <div className="bg-rm-primary">
            <Navbar />
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
    );
}