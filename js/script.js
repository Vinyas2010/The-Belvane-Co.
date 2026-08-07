// ===========================
// PRELOADER
// ===========================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
});

// ===========================
// SCROLL PROGRESS BAR
// ===========================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scroll / height) * 100 + "%";

});

// ===========================
// HEADER SHADOW
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(0,0,0,.85)";

        header.style.backdropFilter =
            "blur(20px)";

    } else {

        header.style.background =
            "rgba(0,0,0,.55)";

    }

});

// ===========================
// CURSOR GLOW
// ===========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    if (!glow) return;

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ===========================
// SCROLL ANIMATION
// ===========================

const hiddenElements =
    document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(el => {

    observer.observe(el);

});

// ===========================
// COUNTER ANIMATION
// ===========================

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if (!entry.isIntersecting) return;

const counter = entry.target;

const target =
Number(counter.dataset.target);

let current = 0;

const increment = target / 120;

const update = () => {

current += increment;

if (current < target) {

counter.innerText =
Math.floor(current);

requestAnimationFrame(update);

}

else {

counter.innerText = target;

}

};

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter => {

counterObserver.observe(counter);

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===========================
// BUTTON RIPPLE
// ===========================

document.querySelectorAll(".btn-primary,.btn-secondary,.btn-card,.btn-nav")

.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// ===========================
// COURSE CARD EFFECT
// ===========================

document.querySelectorAll(".course-card")

.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.12),
#101010 55%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#101010";

});

});

// ===========================
// BACK TO TOP
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
bottom:25px;
right:25px;
width:52px;
height:52px;
border:none;
border-radius:50%;
background:white;
color:black;
font-size:22px;
font-weight:bold;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 15px 35px rgba(0,0,0,.35);
transition:.3s;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(
"%cWelcome to The Belvane Co 🚀",
"font-size:18px;color:#fff;background:#000;padding:10px;border-radius:8px;"
);
