//  Author   :   Rizky Maulana
//  File     :   dashboard.js
//  Structure:   resource/js/dashboard.js

import { createChart } from "./dashboard/analytics";
import { createIcons, icons } from 'lucide';
import Alpine from "alpinejs";

createIcons({ icons });


document.addEventListener("DOMContentLoaded", () => {
    initAOS();
    createChart();
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
