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

const midBtn = document.getElementById("mid");
const pop = document.getElementById("midPopup");
const close = document.getElementById("close");

midBtn.addEventListener("click", () => {
  pop.classList.remove("hidden");
});

close.addEventListener("click", () => {
  pop.classList.add("hidden");
}); 

const idkBtn = document.getElementById("idk");
const popIdk = document.getElementById("idkPopup");
const closeIdk = document.getElementById("closeIdk");

idkBtn.addEventListener("click", () => {
  popIdk.classList.remove("hidden");
});

closeIdk.addEventListener("click", () => {
  popIdk.classList.add("hidden");
}); 


