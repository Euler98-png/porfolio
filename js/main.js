/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
}

/* ----- TYPING EFFECT ----- */
if (document.querySelector(".typedText")) {
    var typingEffect = new Typed(".typedText", {
        strings: ["Designer", "Developper", "Commercial"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
}

/* ----- THEME TOGGLE ----- */
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const icon = themeToggle.querySelector("i");
        icon.classList.toggle("uil-moon");
        icon.classList.toggle("uil-sun");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    const icon = document.querySelector(".theme-toggle i");
    if (icon) {
        icon.classList.remove("uil-moon");
        icon.classList.add("uil-sun");
    }
}

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 });
sr.reveal('.project-card', { interval: 200 });

/* -- HEADINGS -- */
sr.reveal('.top-header', {});

/* -- TIMELINE -- */
sr.reveal('.timeline-item', { interval: 200 });

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});
srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.scrollY;
    if (sections.length > 0) { // Vérifie si des sections existent
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 50,
                  sectionId = current.getAttribute('id');
            const links = document.querySelectorAll('.nav-menu a[href*="' + sectionId + '"]');
            if (links.length > 0) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    links.forEach(link => link.classList.add('active-link'));
                } else {
                    links.forEach(link => link.classList.remove('active-link'));
                }
            }
        });
    }
}
window.addEventListener('scroll', scrollActive);