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
  saveHappy();
  popUp.classList.add("hidden");
}); 

const midBtn = document.getElementById("mid");
const pop = document.getElementById("midPopup");
const close = document.getElementById("close");

midBtn.addEventListener("click", () => {
  pop.classList.remove("hidden");
});

close.addEventListener("click", () => {
  saveMid();
  pop.classList.add("hidden");
}); 

const idkBtn = document.getElementById("idk");
const popIdk = document.getElementById("idkPopup");
const closeIdk = document.getElementById("closeIdk");

idkBtn.addEventListener("click", () => {
  popIdk.classList.remove("hidden");
});

closeIdk.addEventListener("click", () => {
  saveIdk();
  popIdk.classList.add("hidden");
}); 

function saveHappy() {
  const feelGood = document.getElementById("feelGood").value;
  const pride = document.getElementById("proud").value;
  const personalityTrait = document.getElementById("personality").value;

  const entry = {
    mood: "Happy😄",
    feel: feelGood,
    proudOf: pride,
    personality: personalityTrait,
    date: new Date().toLocaleString()
  };

  let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

  entries.push(entry);

  localStorage.setItem("moodEntries", JSON.stringify(entries));

  displayEntries();
};

function displayEntries() {
  const container = document.getElementById("entries"); 
  container.innerHTML = "";

  const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

  entries.forEach((entry) => {
    const cardHappy = document.createElement("div");
    cardHappy.classList.add("cardHappy");

    cardHappy.innerHTML = `
    <h3>${entry.mood}</h3>
    <h4>How I'm feeling today:${entry.feel}</h4>
    <h4>i'm proud of:${entry.proudOf}</h4>
    <h4>My personality today:${entry.personality}</h4>
    <p>${entry.date}</p>
    `;
    container.appendChild(cardHappy);
  });
}

window.addEventListener("load",displayEntries);

function saveMid() {
  const dramatic = document.getElementById("dramatic").value;
  const bored = document.getElementById("bored").value;
  const better = document.getElementById("better").value;

  const entry = {
    mood: "Mid😐",
    feel: dramatic,
    proudOf: bored,
    personality: better,
    date: new Date().toLocaleString()
  };

  let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  entries.push(entry);
  localStorage.setItem("moodEntries", JSON.stringify(entries));
  displayMidEntries();
}

function displayMidEntries() {
  const container = document.getElementById("entries"); 
  container.innerHTML = "";

  const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  entries.forEach(entry => {
    if (entry.mood !== "Mid😐") return;
    const cardMid = document.createElement("div");
    cardMid.classList.add("cardMid");
    cardMid.innerHTML = `
      <h3>${entry.mood}</h3>
      <h4>What feels off: ${entry.feel}</h4>
      <h4>Bored/tired/avoiding: ${entry.proudOf}</h4>
      <h4>What would make today better: ${entry.personality}</h4>
      <p>${entry.date}</p>
    `;
    container.appendChild(cardMid);
  });
}

document.getElementById("close").addEventListener("click", saveMid);
window.addEventListener("load",displayMidEntries);


function saveIdk() {
  const feeling = document.getElementById("feeling").value;
  const trigger = document.getElementById("trigger").value;
  const makebetter = document.getElementById("makebetter").value;

  const entry = {
    mood: "IDK🤔",
    feel: feeling,
    proudOf: trigger,
    personality: makebetter,
    date: new Date().toLocaleString()
  };

  let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  entries.push(entry);
  localStorage.setItem("moodEntries", JSON.stringify(entries));
  displayIDKEntries();
}

function displayIDKEntries() {
  const container = document.getElementById("entries"); 
  container.innerHTML = "";

  const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  entries.forEach(entry => {
    if (entry.mood !== "IDK🤔") return;
    const cardIdk = document.createElement("div");
    cardIdk.classList.add("cardIdk");
    cardIdk.innerHTML = `
      <h3>${entry.mood}</h3>
      <h4>Feeling: ${entry.feel}</h4>
      <h4>Trigger: ${entry.proudOf}</h4>
      <h4>Make today better: ${entry.personality}</h4>
      <p>${entry.date}</p>
    `;
    container.appendChild(cardIdk);
  });
}

document.getElementById("closeIdk").addEventListener("click", saveIdk);
window.addEventListener("load",displayIDKEntries);




