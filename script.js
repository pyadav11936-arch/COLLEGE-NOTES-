
// Automatically open the website after 30 seconds

function openWebsite() {
  const welcome = document.getElementById("welcome");

  if (welcome) {
    welcome.classList.add("hide");
  }
}

setTimeout(openWebsite, 30000);