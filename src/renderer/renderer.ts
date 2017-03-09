// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("app-content");
body.appendChild(div);

fetch("https://raw.githubusercontent.com/timbarclay/PlaysThis/gh-pages/images/AlexeyP1.jpg")
  .then(response => console.log(response.blob()));