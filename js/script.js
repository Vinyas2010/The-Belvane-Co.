console.log("script.js loaded");
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

topBtn.innerHTML = "↑";
topBtn.setAttribute("aria-label", "Back to top");

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
// ===========================
// AI TYPING EFFECT
// ===========================

const typingElement = document.querySelector(".typing");

if (typingElement) {

const words = [
"ChatGPT.",
"Artificial Intelligence.",
"Automation.",
"Prompt Engineering.",
"AI Tools."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typingElement.textContent =
currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingElement.textContent =
currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,
deleting?45:90);

}

typeEffect();

}
// ===========================
// PARTICLES
// ===========================

const particles =
document.querySelector(".particles");

if(particles){

for(let i=0;i<80;i++){

const p=document.createElement("span");

p.style.left=Math.random()*100+"%";

p.style.animationDuration=
5+Math.random()*10+"s";

p.style.animationDelay=
Math.random()*5+"s";

particles.appendChild(p);

}

}
console.log(
"%cWelcome to The Belvane Co 🚀",
"font-size:18px;color:#fff;background:#000;padding:10px;border-radius:8px;"
);
// ===========================
// CUSTOM CURSOR
// ===========================


// ===========================
// CUSTOM CURSOR + MOBILE MENU
// ===========================

const ring = document.querySelector(".cursor-ring");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e)=>{

    if(ring){

        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";

    }

    if(dot){

        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

    }

});


// ===========================
// MOBILE MENU
// ===========================

const menuBtn =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.onclick = ()=>{

        navLinks.classList.toggle("active");

    };

}
// ===========================
// 3D COURSE CARD EFFECT
// ===========================

document.querySelectorAll(".course-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});
// ===========================
// HERO GLOW
// ===========================

const hero = document.querySelector(".hero");

if(hero){

hero.addEventListener("mousemove",(e)=>{

const rect=hero.getBoundingClientRect();

hero.style.setProperty(
"--x",
(e.clientX-rect.left)+"px"
);

hero.style.setProperty(
"--y",
(e.clientY-rect.top)+"px"
);

});

}
// ===========================
// FAQ
// ===========================

document.querySelectorAll(".faq-question")

.forEach(btn=>{

btn.onclick=()=>{

btn.parentElement.classList.toggle("active");

};

});
// ===========================
// FADE IN SECTIONS
// ===========================

const revealSections =
document.querySelectorAll("section");

const revealObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});

revealSections.forEach(section=>{

revealObserver.observe(section);

});
const loader = document.querySelector(".page-loader");

window.addEventListener("scroll",()=>{

const total =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(window.scrollY/total)*100;

if(loader){

loader.style.width = progress + "%";

}

});
// ===========================
// LOGIN MODAL
// ===========================

// ===========================
// LOGIN MODAL
// ===========================

// ===========================
// LOGIN MODAL CLOSE
// ===========================

const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");


if(loginModal && closeModal){

    closeModal.onclick = () => {

        loginModal.style.display = "none";

    };


    window.onclick = (e)=>{

        if(e.target === loginModal){

            loginModal.style.display = "none";

        }

    };

}



// ===========================
// GOOGLE LOGIN
// ===========================

const googleLogin = document.getElementById("googleLogin");

if (googleLogin) {

    googleLogin.addEventListener("click", async () => {

        try {

            const result = await window.firebaseAuth.signInWithPopup(
                window.auth,
                window.googleProvider
            );

            alert("Welcome " + result.user.displayName);

            

        } catch (error) {

            alert(error.message);

        }

    });

}
// ===========================
// USER LOGIN STATE
// ===========================

// ===========================
// USER LOGIN STATE
// ===========================

// ===========================
// USER LOGIN STATE
// ===========================

window.firebaseAuth.onAuthStateChanged(window.auth, (user) => {

    const loginBtn = document.getElementById("loginBtn");
    const dropdown = document.getElementById("profileDropdown");

    const userPhoto = document.getElementById("userPhoto");
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");

    const logoutBtn = document.getElementById("logoutBtn");


    if (!loginBtn) return;


    if (user) {

        loginBtn.innerHTML = `👤 ${user.displayName || "Account"}`;


        if (userPhoto) {
            userPhoto.src = user.photoURL || "";
        }

        if (userName) {
            userName.innerHTML = user.displayName || "User";
        }

        if (userEmail) {
            userEmail.innerHTML = user.email;
        }


        loginBtn.onclick = (e) => {

            e.stopPropagation();

            if (dropdown) {

                dropdown.style.display =
                dropdown.style.display === "block"
                ? "none"
                : "block";

            }

        };


        if (logoutBtn) {

            logoutBtn.onclick = async () => {

                await window.firebaseAuth.signOut(window.auth);

                if (dropdown) {
                    dropdown.style.display = "none";
                }

            };

        }


    } else {

        loginBtn.innerHTML = "Sign In";


        loginBtn.onclick = () => {

            const loginModal =
            document.getElementById("loginModal");

            if (loginModal) {
                loginModal.style.display = "flex";
            }

        };

    }

});


// Close dropdown when clicking outside

document.addEventListener("click", (e) => {

    const dropdown =
    document.getElementById("profileDropdown");


    if (dropdown && !e.target.closest(".user-menu")) {

        dropdown.style.display = "none";

    }

});
console.log("END");
// ===========================
// PROFILE MODAL
// ===========================

const myProfileBtn = document.getElementById("myProfileBtn");
const profileModal = document.getElementById("profileModal");
const closeProfileModal = document.getElementById("closeProfileModal");

const profileModalPhoto = document.getElementById("profileModalPhoto");
const profileModalName = document.getElementById("profileModalName");
const profileModalEmail = document.getElementById("profileModalEmail");


// Open Profile Modal
if (myProfileBtn && profileModal) {

    myProfileBtn.addEventListener("click", () => {

        const user = window.auth.currentUser;

        if (user) {

            if (profileModalPhoto) {
                profileModalPhoto.src = user.photoURL || "";
            }

            if (profileModalName) {
                profileModalName.textContent =
                    user.displayName || "User";
            }

            if (profileModalEmail) {
                profileModalEmail.textContent =
                    user.email || "";
            }

        }

        profileModal.style.display = "flex";

    });

}


// Close Profile Modal
if (closeProfileModal && profileModal) {

    closeProfileModal.addEventListener("click", () => {

        profileModal.style.display = "none";

    });

}


// Close when clicking outside
if (profileModal) {

    profileModal.addEventListener("click", (e) => {

        if (e.target === profileModal) {

            profileModal.style.display = "none";

        }

    });

}
// ===========================
// MY COURSES MODAL
// ===========================

const myCoursesBtn = document.getElementById("myCoursesBtn");
const coursesModal = document.getElementById("coursesModal");
const closeCoursesModal = document.getElementById("closeCoursesModal");


// Open My Courses
if (myCoursesBtn && coursesModal) {

    myCoursesBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        coursesModal.style.display = "flex";

        displayMyCourses();

        // Close profile dropdown
        const dropdown =
            document.getElementById("profileDropdown");

        if (dropdown) {
            dropdown.style.display = "none";
        }

    });

}


// Close My Courses
if (closeCoursesModal && coursesModal) {

    closeCoursesModal.addEventListener("click", () => {

        coursesModal.style.display = "none";

    });

}


// Close when clicking outside
if (coursesModal) {

    coursesModal.addEventListener("click", (e) => {

        if (e.target === coursesModal) {

            coursesModal.style.display = "none";

        }

    });

}
// ===========================
// BROWSE COURSES BUTTON
// ===========================

const browseCoursesBtn =
    document.getElementById("browseCoursesBtn");

if (browseCoursesBtn) {

    browseCoursesBtn.addEventListener("click", (e) => {

        e.preventDefault();

        // Close My Courses modal
        const coursesModal =
            document.getElementById("coursesModal");

        if (coursesModal) {
            coursesModal.style.display = "none";
        }

        // Close profile dropdown
        const dropdown =
            document.getElementById("profileDropdown");

        if (dropdown) {
            dropdown.style.display = "none";
        }

        // Scroll to Courses section
        const coursesSection =
            document.getElementById("courses");

        if (coursesSection) {

            coursesSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}
// ===========================
// COURSE DATA
// ===========================

const availableCourses = [

    {
        id: "chatgpt-masterclass",
        title: "ChatGPT Masterclass",
        description: "Learn how to use ChatGPT effectively for study, work and productivity.",
        icon: "🤖"
    },

    {
        id: "prompt-engineering",
        title: "Prompt Engineering",
        description: "Learn how to write powerful prompts and get better results from AI.",
        icon: "🧠"
    },

    {
        id: "ai-automation",
        title: "AI Automation",
        description: "Discover how AI can automate repetitive tasks and workflows.",
        icon: "⚡"
    },

    {
        id: "ai-image-generation",
        title: "AI Image Generation",
        description: "Learn the fundamentals of creating images with AI tools.",
        icon: "🎨"
    }

];

// ===========================
// USER COURSE ENROLLMENT
// ===========================

function getEnrolledCourses() {

    const user = window.auth.currentUser;

    if (!user) {
        return [];
    }

    const key = "enrolledCourses_" + user.uid;

    return JSON.parse(
        localStorage.getItem(key) || "[]"
    );

}


function saveEnrolledCourses(courses) {

    const user = window.auth.currentUser;

    if (!user) {
        return;
    }

    const key = "enrolledCourses_" + user.uid;

    localStorage.setItem(
        key,
        JSON.stringify(courses)
    );

}
// ===========================
// COURSE BUTTONS
// ===========================

document.addEventListener("click", (e) => {

    const button =
        e.target.closest(".continue-course-btn");

    if (!button) return;

    const user = window.auth.currentUser;

    if (!user) {
        alert("Please sign in first.");
        return;
    }

    const courseId =
        button.dataset.course;

    const course =
        availableCourses.find(
            c => c.id === courseId
        );

    if (!course) return;

    const enrolledCourses =
        getEnrolledCourses();

    // ===========================
    // NOT ENROLLED
    // ===========================

    if (!enrolledCourses.includes(courseId)) {

        enrolledCourses.push(courseId);

        saveEnrolledCourses(enrolledCourses);

        alert(
            course.title +
            " has been added to your courses!"
        );

        displayMyCourses();

        return;
    }

    // ===========================
    // OPEN COURSE
    // ===========================

    const courseLearningModal =
        document.getElementById(
            "courseLearningModal"
        );

    const learningCourseIcon =
        document.getElementById(
            "learningCourseIcon"
        );

    const learningCourseTitle =
        document.getElementById(
            "learningCourseTitle"
        );

    const learningCourseDescription =
        document.getElementById(
            "learningCourseDescription"
        );

    const coursesModal =
        document.getElementById(
            "coursesModal"
        );

    const dropdown =
        document.getElementById(
            "profileDropdown"
        );

    if (coursesModal) {
        coursesModal.style.display = "none";
    }

    if (dropdown) {
        dropdown.style.display = "none";
    }

    if (learningCourseIcon) {
        learningCourseIcon.textContent =
            course.icon;
    }

    if (learningCourseTitle) {
        learningCourseTitle.textContent =
            course.title;
    }

    if (learningCourseDescription) {
        learningCourseDescription.textContent =
            course.description;
    }

    if (courseLearningModal) {
        courseLearningModal.style.display =
            "flex";
    }

});
// ===========================
// SHOW ENROLLED COURSES ONLY
// ===========================

function displayMyCourses() {

    const myCoursesList =
        document.getElementById("myCoursesList");

    if (!myCoursesList) return;

    const user = window.auth.currentUser;

    if (!user) {

        myCoursesList.innerHTML = `
            <div class="empty-courses">
                <div class="empty-icon">🔐</div>

                <h3>Please sign in</h3>

                <p>
                    Sign in to see your courses.
                </p>
            </div>
        `;

        return;
    }

    const enrolledIds =
        getEnrolledCourses();

    myCoursesList.innerHTML = "";

    if (enrolledIds.length === 0) {

        myCoursesList.innerHTML = `
            <div class="empty-courses">

                <div class="empty-icon">📖</div>

                <h3>No courses yet</h3>

                <p>
                    You haven't enrolled in any courses yet.
                </p>

                <a href="#courses" id="browseCoursesBtn">
                    Browse Courses →
                </a>

            </div>
        `;

        return;
    }

    enrolledIds.forEach(courseId => {

        const course =
            availableCourses.find(
                c => c.id === courseId
            );

        if (!course) return;

        const courseCard =
            document.createElement("div");

        courseCard.className =
            "my-course-card";

        courseCard.innerHTML = `
            <div class="my-course-icon">
                ${course.icon}
            </div>

            <div class="my-course-details">

                <h3>${course.title}</h3>

                <p>${course.description}</p>

                <button
                    class="continue-course-btn"
                    data-course="${course.id}">
                    Continue Course →
                </button>

            </div>
        `;

        myCoursesList.appendChild(courseCard);

    });

}
// ===========================
// START LEARNING
// ===========================

const startLessonBtn =
    document.getElementById("startLessonBtn");

if (startLessonBtn) {

    startLessonBtn.addEventListener("click", () => {

        alert("Your first lesson is coming soon! 🚀");

    });

}
// ===========================
// LESSON PROGRESS
// ===========================

const completeLessonBtn =
    document.getElementById("completeLessonBtn");

function getCompletedLessons() {

    const user = window.auth.currentUser;

    if (!user) {
        return [];
    }

    const key =
        "completedLessons_" + user.uid;

    return JSON.parse(
        localStorage.getItem(key) || "[]"
    );

}


function saveCompletedLessons(lessons) {

    const user = window.auth.currentUser;

    if (!user) {
        return;
    }

    const key =
        "completedLessons_" + user.uid;

    localStorage.setItem(
        key,
        JSON.stringify(lessons)
    );

}


function updateLessonButton() {

    if (!completeLessonBtn) return;

    const completedLessons =
        getCompletedLessons();

    if (completedLessons.includes("lesson-1")) {

        completeLessonBtn.textContent =
            "✓ Lesson Completed";

        completeLessonBtn.disabled = true;

        completeLessonBtn.style.opacity =
            "0.7";

    }

}


if (completeLessonBtn) {

    completeLessonBtn.addEventListener(
        "click",
        () => {

            const user =
                window.auth.currentUser;

            if (!user) {

                alert(
                    "Please sign in first."
                );

                return;
            }

            const completedLessons =
                getCompletedLessons();

            if (
                !completedLessons.includes(
                    "lesson-1"
                )
            ) {

                completedLessons.push(
                    "lesson-1"
                );

                saveCompletedLessons(
                    completedLessons
                );

            }

            updateLessonButton();

            alert(
                "Lesson completed! 🎉"
            );

        }
    );

}
