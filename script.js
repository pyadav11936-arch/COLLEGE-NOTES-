
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const empty = document.getElementById("empty");

search.addEventListener("input", function () {
  const query = search.value.toLowerCase().trim();
  let count = 0;

  cards.forEach(function (card) {
    const text = (
      card.dataset.name + " " + card.innerText
    ).toLowerCase();

    const found = text.includes(query);
    card.style.display = found ? "" : "none";

    if (found) count++;
  });

  empty.hidden = count !== 0;
});

function openWebsite() {
  document.getElementById("welcome").classList.add("hide");
}

setTimeout(function () {
  openWebsite();
}, 30000);