/* =========================================
   Desmos Portfolio - script.js
========================================= */

/* -----------------------------
   Typing Effect (Hero Subtitle)
----------------------------- */

const typingElement = document.getElementById("typing");

const phrases = [
    "Desmos Graph Artist",
    "Math Visualizer",
    "Simulation Builder",
    "Interactive Designer",
    "Equation Explorer"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {

    const current = phrases[phraseIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = current.substring(0, charIndex);

    let speed = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === current.length) {
        speed = 1400;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
    }

    setTimeout(typeLoop, speed);
}

typeLoop();


/* -----------------------------
   Footer Year
----------------------------- */

document.getElementById("year").textContent = new Date().getFullYear();


/* -----------------------------
   Scroll Fade-in Animation
----------------------------- */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .feature-card, .stat-card").forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
});


/* -----------------------------
   Animated Stats Counter
----------------------------- */

function animateCount(el, target, duration = 1200) {

    let start = 0;
    let startTime = null;

    function update(timestamp) {

        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);

        const value = Math.floor(progress * target);

        el.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(update);
}


/* -----------------------------
   Init Stats (Graph Count)
----------------------------- */

const graphCountEl = document.getElementById("graphCount");

// placeholder value (later we’ll load from graphs.json)
const GRAPH_COUNT = 12;

animateCount(graphCountEl, GRAPH_COUNT);


/* -----------------------------
   Future Hook: Load Graphs
   (used in gallery page later)
----------------------------- */

async function loadGraphs() {
    try {
        const res = await fetch("graphs.json");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Failed to load graphs.json", err);
        return [];
    }
}

/* exposed for later pages */
window.loadGraphs = loadGraphs;


/* -----------------------------
   Optional: smooth nav scroll
----------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
