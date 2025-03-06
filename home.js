
document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.querySelector(".sign-in");
    const settingsMenu = document.querySelector(".settings-menu");

    signInButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents click from bubbling to `document`
        settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
    });

    // Close menu when clicking outside
    document.addEventListener("click", function(event) {
        if (!signInButton.contains(event.target) && !settingsMenu.contains(event.target)) {
            settingsMenu.style.display = "none";
        }
    });
});

