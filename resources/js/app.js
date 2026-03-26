import "./bootstrap";
import "animate.css";
import Alpine from "alpinejs";
import AOS from "aos";
import "aos/dist/aos.css";
import { initSloganAnimation, initRoleTitleAnimation, initCardObserver, initFloatingCards } from "./home/home";
import { createTimeline } from "./home/timeline";
import { mouseHover } from "./home/about";
document.addEventListener("DOMContentLoaded", () => {
    initAOS();
    initSloganAnimation();
    initRoleTitleAnimation();
    initCardObserver();
    initFloatingCards();
    createTimeline();
    mouseHover();
});

window.Alpine = Alpine;
Alpine.start();


// ======================
// AOS INIT
// ======================
function initAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        startEvent: "DOMContentLoaded",
    });
}

