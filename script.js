const musicSound = new Audio("solar_music.mp3");
musicSound.loop = true;

// Function to create stars
function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = "1px";
    star.style.height = "1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}

createStars();

// Start music and hide start screen on click
document.getElementById("start-btn").addEventListener("click", () => {
  musicSound.play();
  document.getElementById("start-screen").style.display = "none";
});
