const sadBtn = document.getElementById("sad");
const popup = document.getElementById("therapyPopup");
const closeBtn = document.getElementById("closePopup");

sadBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

const happyBtn = document.getElementById("happy");
const popUp = document.getElementById("promptPopup");
const closebtn = document.getElementById("closePopUp");

happyBtn.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

closebtn.addEventListener("click", () => {
  popUp.classList.add("hidden");
}); 

