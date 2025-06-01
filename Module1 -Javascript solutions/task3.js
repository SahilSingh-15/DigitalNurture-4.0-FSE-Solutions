const events = [
  { name: "Yoga Camp", date: "2025-07-10", seats: 10 },
  { name: "Music Night", date: "2025-05-01", seats: 0 },
  { name: "Art Fest", date: "2025-09-12", seats: 25 },
];

const today = new Date("2025-05-27");

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  }
});

function register(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats left!");
    event.seats--;
    console.log(`Registered for ${event.name}`);
  } catch (err) {
    console.error(err.message);
  }
}
