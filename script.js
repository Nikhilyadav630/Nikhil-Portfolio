const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


// ================================
// MOBILE MENU
// ================================

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// ================================
// CLOSE MENU AFTER CLICKING LINK
// ================================

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ================================
// SMOOTH SCROLLING
// ================================

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }
        }
    });
});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .experience-card, .skill-card, .education-card, .project-card, .certificate-card, .contact-container"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();