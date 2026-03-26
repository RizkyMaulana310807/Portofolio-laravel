const mouseMovementArea = document.querySelector("#mouseMovementArea");
const el = document.querySelector("#mouseCircle");

export function mouseHover() {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let isInside = false;

    // 🔥 smooth follow (lerp)
    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        el.style.left = currentX + "px";
        el.style.top = currentY + "px";

        requestAnimationFrame(animate);
    }

    animate();

    // ✅ pakai ini (bukan mouseover/out)
    mouseMovementArea.addEventListener("mouseenter", () => {
        isInside = true;

        // 🔥 kecil jadi 48px
        el.style.width = "48px";
        el.style.height = "48px";
    });

    mouseMovementArea.addEventListener("mouseleave", () => {
        isInside = false;

        // 🔥 balik besar
        el.style.left = "9.25rem";
        el.style.top = "23.75rem";

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
