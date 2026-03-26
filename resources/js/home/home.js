import { animate, splitText, stagger } from "animejs";


// ======================
// SLOGAN ANIMATION
// ======================
export function initSloganAnimation() {
    const { chars } = splitText(".slogan", { chars: true });

    animate(chars, {
        y: [
            { to: "-2.75rem", ease: "outExpo", duration: 600 },
            { to: 0, ease: "outBounce", duration: 800, delay: 100 },
        ],
        rotate: {
            from: "-1turn",
        },
        delay: stagger(50),
        ease: "inOutCirc",
        loopDelay: 1000,
        loop: true,
    });
}


// ======================
// ROLE TITLE ANIMATION
// ======================
export function initRoleTitleAnimation() {
    const roleTitles = document.querySelectorAll(".role-title");

    roleTitles.forEach((_, index) => {
        const { words } = splitText(`.role-title:nth-child(${index + 1})`, {
            words: true,
        });

        animate(words, {
            translateY: [
                { to: "-0.75rem", ease: "outExpo", duration: 600 },
                { to: 0, ease: "outBounce", duration: 800, delay: 200 },
            ],
            translateX: [
                { to: 0, ease: "outExpo", duration: 600 },
                { to: "0.75rem", ease: "outExpo", duration: 600, delay: 200 },
                { to: 0, ease: "outExpo", duration: 600, delay: 200 },
            ],
            delay: stagger(120 * (index + 1)),
            loopDelay: 1000,
            loop: true,
            easing: "easeInExpo",
        });
    });
}


// ======================
// CARD INTERSECTION ANIMATION
// ======================
export function initCardObserver() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const index = [...cards].indexOf(entry.target);

            animate(entry.target, {
                opacity: [0, 1],
                translateY: [60, 0],
                scale: [0.9, 1],
                duration: 900,
                delay: index * 150,
                easing: "easeOutExpo",
            });

            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.2,
    });

    cards.forEach(card => observer.observe(card));
}


// ======================
// FLOATING CARDS (INITIAL + SCROLL)
// ======================
export function initFloatingCards() {
    const floatingCards = document.querySelectorAll(".floating-card");

    const config = [
        { x: 65, y: 225, rotate: -10 },
        { x: 380, y: 150, rotate: -3 },
        { x: 100, y: 50, rotate: -25 },
    ];

    // initial animation
    floatingCards.forEach((card, index) => {
        const c = config[index];

        animate(card, {
            translateX: c.x,
            translateY: c.y,
            rotate: c.rotate,
            opacity: [0, 1],
            duration: 800,
            delay: index * 200,
            easing: "easeOutExpo",
        });
    });

    // scroll effect
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        floatingCards.forEach((card, index) => {
            const c = config[index];
            const speed = 0.1 + index * 0.05;

            card.style.transform = `
                translateX(${c.x}px)
                translateY(${c.y - scrollY * speed}px)
                rotate(${c.rotate}deg)
            `;
        });
    });
}
