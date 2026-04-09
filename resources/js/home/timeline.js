const educationData = [
    {
        school: "SD Negeri 1 Ngamprah",
        description: "Lulus dari SD Negeri 1 Ngamprah",
        start: "2014",
        end: "2020",
    },
    {
        school: "SMP Krida Utama Padalarang",
        description: "Lulus dari SMP Krida Utama Padalarang",
        start: "2020",
        end: "2023",
    },
    {
        school: "SMK Negeri 4 Padalarang",
        description: "Bersekolah di SMK Negeri 4 Padalarang",
        start: "2023",
        end: "2026",
    },
];

export function createTimeline() {
    const timeline = document.getElementById("timelineRiwayatPendidikan");

    educationData
        .sort((a, b) => b.start - a.start)
        .forEach((item, index, array) => {
            const el = document.createElement("div");

            el.className = "relative";

            el.innerHTML = `
            <!-- ITEM -->
            <div class="flex items-center justify-between gap-6 p-2 xl:p-4 shadow">
                
                <div class="flex items-center">
                    <!-- icon -->
                    <span>
                        <i class="fa-solid fa-book text-gray text-base xl:text-xl"></i>
                    </span>

                    <!-- content -->
                    <div class="flex flex-col ml-4">
                        <span class="text-base xl:text-lg font-quicksand font-semibold">${
                            item.school
                        }</span>
                        <span class="text-xs xl:text-base font-quicksand text-gray">${
                            item.description
                        }</span>
                    </div>

                </div>
                
                <!-- tanggal -->
                <span class="text-gray text-xs xl:text-sm font-quicksand">
                    ${item.start} - ${item.end}
                </span>
            </div>

            <!-- GARIS -->
            ${
                index !== array.length - 1
                    ? ` <div class="relative flex flex-row items-center bg-bright justify-between p-4">
                            <div class="absolute left-7 top-0 w-0.5 h-full bg-slate-500 rounded-full"></div>
                        </div> `
                    : ""
            }
        `;

            timeline.appendChild(el);
        });
}
