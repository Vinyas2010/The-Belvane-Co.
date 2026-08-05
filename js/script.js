// =====================================
// The Belvane Co.
// Premium JavaScript
// =====================================

// Navbar Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.background = "rgba(0,0,0,.75)";
        header.style.backdropFilter = "blur(25px)";
    } else {
        header.style.background = "rgba(0,0,0,.35)";
        header.style.backdropFilter = "blur(18px)";
    }
});

// ==============================
// Scroll Reveal Animation
// ==============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".course-card, .glass-card, .stats div").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ==============================
// Animated Counter
// ==============================

const counters = document.querySelectorAll(".stats h2");

let started = false;

window.addEventListener("scroll", () => {

    if (started) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    if (stats.getBoundingClientRect().top < window.innerHeight) {

        started = true;

        counters.forEach(counter => {

            const original = counter.innerText;

            const target = parseInt(original);

            if (isNaN(target)) return;

            let current = 0;

            const timer = setInterval(() => {

                current += Math.ceil(target / 50);

                if (current >= target) {
                    counter.innerText = original;
                    clearInterval(timer);
                } else {
                    counter.innerText = current + "+";
                }

            }, 25);

        });

    }

});

// ==============================
// Mouse Glow Effect
// ==============================

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ==============================
// Scroll Progress Bar
// ==============================

const progressBar = document.createElement("div");

progressBar.className = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        (window.scrollY / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ==============================
// Fade Hero on Scroll
// ==============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.opacity = 1 - window.scrollY / 800;

});

// ==============================
// Console Message
// ==============================

console.log("🚀 The Belvane Co. Website Loaded Successfully");
