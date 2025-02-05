// Modal functionality
const loginBtn = document.getElementById("login-btn");
const modal = document.getElementById("login-modal");
const closeButton = document.querySelector(".close-button");

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
