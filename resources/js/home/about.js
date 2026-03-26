const mouseMovementArea = document.querySelector("#mouseMovementArea");
const el = document.querySelector("#mouseCircle");

export function mouseHover() {
    // Posisi "default" saat mouse di luar
    const DEFAULT_X = 148; // setara 9.25rem
    const DEFAULT_Y = 380; // setara 23.75rem

    let mouseX = DEFAULT_X;
    let mouseY = DEFAULT_Y;

    let currentX = DEFAULT_X;
    let currentY = DEFAULT_Y;

    let isInside = false;

    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        el.style.left = currentX + "px";
        el.style.top = currentY + "px";

        requestAnimationFrame(animate);
    }

    animate();

    mouseMovementArea.addEventListener("mouseenter", () => {
        isInside = true;
        el.style.width = "48px";
        el.style.height = "48px";
    });

    mouseMovementArea.addEventListener("mouseleave", () => {
        isInside = false;

        // 🔥 Cukup reset target posisi — animate() akan bawa elemen kembali secara smooth
        mouseX = DEFAULT_X;
        mouseY = DEFAULT_Y;

        el.style.width = "144px";
        el.style.height = "144px";
    });

    mouseMovementArea.addEventListener("mousemove", (e) => {
        if (!isInside) return;

        const rect = mouseMovementArea.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });
}