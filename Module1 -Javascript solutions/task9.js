// Using .then()
fetch("events.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Using async/await
async function fetchEvents() {
  const loader = document.querySelector("#loader");
  loader.style.display = "block";

  try {
    const res = await fetch("events.json");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching events:", err);
  } finally {
    loader.style.display = "none";
  }
}
