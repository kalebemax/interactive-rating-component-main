const mainBtn = document.getElementById("submit");

const showCard = () => {
  const mainCard = document.getElementById("main");
  const card = document.getElementById("card");

  if (mainCard.style.display === "none") {
    card.style.display = "block";
  } else {
    mainCard.style.display = "none";
    card.style.display = "block";
  }
};

mainBtn.addEventListener("click", showCard);

const buttons = document.querySelectorAll(".rating-btn");
const rating = document.getElementById("rating");

let selectedRating = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.textContent;
  });
});

const getRating = () => {
  if (selectedRating > 0) {
    rating.innerHTML = `You selected ${selectedRating} out of 5`;
  } else {
    rating.innerHTML = "You selected 0 out of 5";
  }
};

mainBtn.addEventListener("click", getRating);
