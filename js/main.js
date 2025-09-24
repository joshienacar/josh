// Basic interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");

  const heroText = document.querySelector(".hero p");
  heroText.addEventListener("click", () => {
    alert("Thanks for visiting my portfolio, Jocelyn!");
  });
});
