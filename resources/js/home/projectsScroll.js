export function scroll() {
    const track = document.getElementById("track");

    // Simpan card asli sebelum diduplikat
    const originalCards = Array.from(track.children);
    const minCopies = 6;

    for (let i = 0; i < minCopies - 1; i++) {
        originalCards.forEach(card => {
            track.appendChild(card.cloneNode(true));
        });
    }

    let speed = 1;
    let isPaused = false;
    let currentPos = 0;
    let hoveredCard = null;

    function getOriginalSetWidth() {
        return track.scrollWidth / minCopies;
    }

    function snapToCard(card) {
        const targetScroll =
            card.offsetLeft -
            track.clientWidth / 2 +
            card.offsetWidth / 2;
        currentPos = targetScroll;
        track.scrollLeft = currentPos;
    }

    function animate() {
        if (!isPaused) {
            currentPos += speed;

            if (currentPos >= getOriginalSetWidth()) {
                currentPos -= getOriginalSetWidth();
            }

            track.scrollLeft = currentPos;
        }

        requestAnimationFrame(animate);
    }

    // Pakai event delegation langsung di document
    document.addEventListener("mouseover", (e) => {
        const card = e.target.closest(".project-card");

        if (card && track.contains(card)) {
            if (hoveredCard !== card) {
                hoveredCard = card;
                isPaused = true;
                snapToCard(card);
            }
        } else if (!card) {
            hoveredCard = null;
            isPaused = false;
        }
    });

    animate();
}