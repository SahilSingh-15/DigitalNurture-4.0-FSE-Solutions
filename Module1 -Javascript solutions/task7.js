const container = document.querySelector("#events");

events.forEach(e => {
  const card = document.createElement("div");
  card.className = "eventCard";
  card.textContent = `${e.name} - ${e.date}`;
  container.appendChild(card);
});
