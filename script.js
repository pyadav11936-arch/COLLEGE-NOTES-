const welcome = document.getElementById("welcome");
const mainWebsite = document.getElementById("mainWebsite");
const countdown = document.getElementById("countdown");
const enterBtn = document.getElementById("enterBtn");

let seconds = 10;
let websiteOpened = false;

function openWebsite() {
  if (websiteOpened) return;

  websiteOpened = true;
  clearInterval(timer);

  welcome.classList.add("hide");
  mainWebsite.classList.add("show");

  document.body.style.overflow = "auto";
}

const timer = setInterval(() => {
  seconds--;
  countdown.textContent = seconds;

  if (seconds <= 0) {
    openWebsite();
  }
}, 1000);

enterBtn.addEventListener("click", openWebsite);