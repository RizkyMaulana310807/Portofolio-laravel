import { Chart } from "chart.js/auto";

function generateData(base = 50, variance = 10) {
    return Array.from({ length: 12 }, (_, i) => {
        const trend = i * 2; // naik pelan tiap bulan
        const random = Math.random() * variance - variance / 2;
        return Math.round(base + trend + random);
    });
}

export function createChart() {
    const ctx = document.getElementById("analyticsChart").getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 250);

    gradient.addColorStop(0, "#ff9f1c"); // kuat di atas
    gradient.addColorStop(0.1, "#ff9f1c"); // tahan warna sampai 30%
    gradient.addColorStop(1, "rgba(255, 248, 225, 0)"); // langsung transparan

    new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Ags",
                "Sep",
                "Okt",
                "Nov",
                "Des",
            ],
            datasets: [
                {
                    label: "Bulan Ini",
                    data: generateData(60, 8),
                    borderColor: "#ff9f1c",
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                },
                {
                    label: "Bulan Lalu",
                    data: generateData(50, 6),
                    borderColor: "#76877D",
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: "Quicksand",
                            size: 12,
                        },
                    },
                },
            },
        },
    });
}
