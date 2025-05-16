document.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector("header"),
        prevScrollPos = 0;

    function handleScroll() {
        let currentScrollPos = window.scrollY;
        
        if (currentScrollPos <= 80) {
            header.classList.remove("hide");
            header.classList.add("show");
        } else if (currentScrollPos < prevScrollPos) {
            if (currentScrollPos <= 80) {
                header.classList.remove("hide");
                header.classList.add("show");
            } else {
                header.classList.remove("show");
                header.classList.add("hide");
            }
        } else if (currentScrollPos > prevScrollPos) {
            header.classList.remove("show");
            header.classList.add("hide");
        }
        
        prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector(".footer"),
        footerEffectTriggered = false;

    function handleFooterScroll() {
        if (footerEffectTriggered) return;

        let scrollPosition = window.scrollY + window.innerHeight,
            footerPosition = footer.offsetTop;

        if (scrollPosition > footerPosition - 100) {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
            footerEffectTriggered = true;
            window.removeEventListener("scroll", handleFooterScroll);
        }
    }

    window.addEventListener("scroll", handleFooterScroll);
    handleFooterScroll();
});

document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function() {
    let hiddenElements = document.querySelectorAll(".hidden"),
        fadeInTriggered = false;

    function handleElementAppear() {
        if (fadeInTriggered) return;

        let allElementsVisible = true;
        
        hiddenElements.forEach(element => {
            let elementPosition = element.getBoundingClientRect().top,
                windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add("fade-in");
                element.classList.remove("hidden");
            } else {
                allElementsVisible = false;
            }
        });

        if (allElementsVisible) {
            fadeInTriggered = true;
            window.removeEventListener("scroll", handleElementAppear);
        }
    }

    window.addEventListener("scroll", handleElementAppear);
    handleElementAppear();
});

document.addEventListener("DOMContentLoaded", function() {
    let textContent = document.querySelector(".text-content"),
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

    observer.observe(textContent);
});