function addEvent(name, date, category) {
  return { name, date, category, seats: 20 };
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    console.log(`Registered for ${event.name}`);
  }
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

// Closure to track category-wise registrations
function categoryTracker(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`Registrations in ${category}: ${count}`);
  };
}
