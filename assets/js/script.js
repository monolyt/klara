document.addEventListener("DOMContentLoaded", function () {
    const toggleLink = document.getElementById("theme-toggle");
    const root = document.documentElement;

    // Set initial theme to dark if no theme is saved
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
        toggleLink.textContent = savedTheme === "dark" ? "Light" : "Dark";
    } else {
        // Default to dark mode
        root.setAttribute("data-theme", "dark");
        toggleLink.textContent = "Light";
        localStorage.setItem("theme", "dark");
    }

    // Add event listener for theme toggle
    toggleLink.addEventListener("click", function (e) {
        e.preventDefault();

        if (root.getAttribute("data-theme") === "dark") {
            // Switch to light mode
            root.setAttribute("data-theme", "light");
            toggleLink.textContent = "Dark";
            localStorage.setItem("theme", "light");
        } else {
            // Switch to dark mode
            root.setAttribute("data-theme", "dark");
            toggleLink.textContent = "Light";
            localStorage.setItem("theme", "dark");
        }
    });
});
