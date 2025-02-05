// Modal functionality
const loginBtn = document.getElementById("login-btn");
const modal = document.getElementById("login-modal");
const closeButton = document.querySelector(".close-button");
const profileBtn = document.getElementById("profile-btn");
const profileMenu = document.querySelector(".profile-menu");

profileBtn.addEventListener("click", () => {
    profileMenu.style.display = profileMenu.style.display === "none" ? "block" : "none";
});

// Close the dropdown if clicked outside
window.addEventListener("click", (event) => {
    if (!event.target.closest('.profile-dropdown')) {
        profileMenu.style.display = "none";
    }
});

loginBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
