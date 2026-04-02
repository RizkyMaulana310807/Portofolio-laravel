/**
 * ==============================================================
 * NAMA FILE   : projectsScroll.js
 * DESKRIPSI   : Script auto scrolling horizontal untuk daftar project.
 *               Mendukung infinite scroll dan pause saat hover.
 * ==============================================================
 */

/**
 * Mengaktifkan auto scroll pada  elemen track
 *
 * @function scroll
 * @returns {void}
 */
export function scroll() {
    /** @type {HTMLElement} */
    const track = document.getElementById("track");

    if (!track) {
        console.warn("Element dengan id 'track' tidak ditemukan.");
        return;
    }

    /** @type {HTMLElement[]} */
    const originalCards = Array.from(track.children);

    /** Jumlah duplikasi untuk efek infinite */
    const minCopies = 6;

    // Duplikasi card agar bisa infinite scroll
    for (let i = 0; i < minCopies - 1; i++) {
        originalCards.forEach((card) => {
            track.appendChild(card.cloneNode(true));
        });
    }

    /** Kecepatan scroll (pixel per frame) */
    let speed = 1.5;

    /** Status pause */
    let isPaused = false;

    /** Posisi scroll saat ini */
    let currentPos = 0;

    /** Card yang sedang di-hover */
    let hoveredCard = null;

    /**
     * Menghitung lebar 1 set original card
     * @returns {number}
     */
    function getOriginalSetWidth() {
        return track.scrollWidth / minCopies;
    }

    /**
     * Menggeser scroll agar card berada di tengah
     *
     * @param {HTMLElement} card
     */
    function snapToCard(card) {
        const targetScroll =
            card.offsetLeft - track.clientWidth / 2 + card.offsetWidth / 2;

        currentPos = targetScroll;
        track.scrollLeft = currentPos;
    }

    /**
     * Loop animasi scroll
     */
    function animate() {
        // console.log(isPaused);
        if (!isPaused) {
            currentPos += speed;

            // Reset posisi untuk efek infinite
            if (currentPos >= getOriginalSetWidth()) {
                currentPos -= getOriginalSetWidth();
            }

            track.scrollLeft = currentPos;
        }

        requestAnimationFrame(animate);
    }

    /**
     * Event hover menggunakan event delegation
     */
    const card = document.querySelector(".project-card");
    card.addEventListener("mouseover", (e) => {
        if (card && track.contains(card)) {
            console.log(card);
            console.log(track.contains(card));
            if (hoveredCard !== card) {
                hoveredCard = card;
                isPaused = true;
                snapToCard(card);
            }
        } else {
            hoveredCard = null;
            isPaused = false;
        }
    });

    // Jalankan animasi
    animate();
}
