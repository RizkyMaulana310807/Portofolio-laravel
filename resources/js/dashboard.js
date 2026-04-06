import { createChart } from "./dashboard/analytics";
import { createIcons, icons } from 'lucide';

createIcons({ icons });


document.addEventListener("DOMContentLoaded", () => {
    createChart();
});
