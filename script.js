
function searchNotes() {
  const search = document
    .getElementById("search")
    .value.toLowerCase()
    .trim();

  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    const name = card.dataset.name.toLowerCase();
    const text = card.innerText.toLowerCase();

    if (
      name.includes(search) ||
      text.includes(search)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}