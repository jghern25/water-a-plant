let score = 0;

const button = document.getElementById("waterBtn");
const plant = document.getElementById("plant");
const scoreDisplay = document.getElementById("score");

button.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;

    if (score >= 5) {
        plant.textContent = "🌿";
    }

    if (score >= 10) {
        plant.textContent = "🌸";
    }
});
const progressBar = document.getElementById("progressBar");
