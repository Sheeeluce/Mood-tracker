# Mood-tracker

A simple JavaScript-based mood tracking web app that allows users to log how they feel each day and store their responses using `localStorage`.

## 📌 Features

* Select a mood:

  * Happy 😄
  * Mid 😐
  * Sad 😥
  * idk 😫
* Pop-up prompts based on selected mood
* Stores mood entries with:

  * Emotional reflection
  * Small wins
  * Personality for the day
  * Date & time
* Automatically displays saved entries
* Data persists using browser localStorage

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Browser localStorage API

---

## 📂 Project Structure

```
/project-folder
│
├── index.html
├── moods.html (if separate display page)
├── about.html
├── style.css
└── script.js
```

---

## ⚙️ How It Works

1. User clicks a mood button.
2. A popup appears with reflection prompts.
3. On confirmation:

   * Inputs are collected.
   * An entry object is created.
   * Entry is pushed into an array.
   * Array is stored in localStorage.
4. `displayEntries()` renders all stored entries into cards.
5. Entries persist even after page refresh.


## 💾 Data Structure Example

```js
{
  mood: "Happy😄",
  feel: "I finished my project",
  proudOf: "Staying consistent",
  personality: "Focused version of me",
  date: "2/17/2026, 3:45 PM"
}
```


## 🚀 Future Improvements

* Edit and delete entries
* Filter moods by type
* Add animations
* Dark/light theme toggle
* Cloud storage integration


## 🧠 Learning Goals

This project demonstrates:

* DOM manipulation
* Event handling
* Dynamic element creation
* Working with localStorage
* Rendering stored data on page load

