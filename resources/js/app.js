import "./bootstrap";
import "animate.css";
import Alpine from "alpinejs"; // Import first
import AOS from "aos";
import "aos/dist/aos.css";
import {
    initSloganAnimation,
    initRoleTitleAnimation,
    initCardObserver,
    initFloatingCards,
} from "./home/home";
import { createTimeline } from "./home/timeline";
import { mouseHover } from "./home/about";
import { scroll } from "./home/projectsScroll";
import { createIcons, icons } from "lucide";

// web hook
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

createIcons({ icons });

document.addEventListener("DOMContentLoaded", () => {
    initAOS();
    initSloganAnimation();
    initRoleTitleAnimation();
    initCardObserver();
    initFloatingCards();
    createTimeline();
    mouseHover();
    scroll();
});

// Start Alpine
// and dont forget to import it firts
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
