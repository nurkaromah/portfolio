// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu after clicking navigation link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================
// DARK MODE
// =========================

const themeToggle =
    document.getElementById("theme-toggle");

const themeIcon =
    themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


// Remember theme

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


// =========================
// CONTACT FORM
// =========================

// const contactForm =
//     document.getElementById("contact-form");

// contactForm.addEventListener("submit", function(event) {

//     event.preventDefault();

//     alert(
//         "Thank you for your message! " +
//         "Please contact me directly via email."
//     );

//     contactForm.reset();

// });