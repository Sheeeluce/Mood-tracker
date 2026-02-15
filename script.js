const sadBtn = document.getElementById("sad");
const popup = document.getElementById("therapyPopup");
const closeBtn = document.getElementById("closePopup");

sadBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
