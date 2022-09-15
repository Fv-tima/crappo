const coinCard = document.querySelectorAll(".card-body");
const btn = document.querySelectorAll(".coinBtn");
coinCard.forEach((card) => {
  card.addEventListener("click", () => {
    changeContent();
    card.classList.add("active");
  });
});

function changeContent() {
  coinCard.forEach((card) => {
    card.classList.remove("active");
  });
}
