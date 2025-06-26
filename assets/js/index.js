
// dark mode
function darkMode() {
    const body = document.body;
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");

    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("mode", isDark ? "dark" : "light");

    moonIcon.style.display = isDark ? "none" : "inline";
    sunIcon.style.display = isDark ? "inline" : "none";
}

window.onload = function () {
    const savedMode = localStorage.getItem("mode");
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");

    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    } else {
        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
    }
};


// nav links

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav .links ul li a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 2) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});

// btn top

document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Language
function switchLanguage() {
    window.location.href = "index(ar).html";
}

// btn nav 
document.getElementById("btnNavShow").addEventListener("click", function () {
    const target = document.getElementById("showNav");
    if (target) {
        target.classList.toggle("show");
    }
});