// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = () => {
  alert("Page fully loaded!");
};

// 2. Syntax, Data Types, and Operators
const eventName = "Music Festival";
const eventDate = "2025-06-15";
let availableSeats = 50;
console.log(`Event: ${eventName}, Date: ${eventDate}, Seats: ${availableSeats}`);

// 3. Conditionals, Loops, and Error Handling
const events = [
  { name: "Music Festival", date: "2025-06-15", seats: 50, category: "Music" },
  { name: "Art Workshop", date: "2025-05-10", seats: 0, category: "Workshop" },
  { name: "Coding Bootcamp", date: "2025-07-01", seats: 25, category: "Education" }
];

function isFutureEvent(date) {
  return new Date(date) > new Date();
}

function displayEvents(eventList) {
  eventList.forEach(ev => {
    if (isFutureEvent(ev.date) && ev.seats > 0) {
      console.log(`Upcoming: ${ev.name}`);
    }
  });
}

try {
  displayEvents(events);
} catch (e) {
  console.error("Error displaying events:", e);
}

// 4. Functions, Closures, Higher-Order
function addEvent(event) {
  events.push(event);
}

function registerUser(eventName) {
  const event = events.find(ev => ev.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    console.log(`Registered for ${event.name}`);
  } else {
    console.log("Event full or not found");
  }
}

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(ev => ev.category === category);
  callback(filtered);
}

// Closure to track total registrations
function registrationTracker() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const trackMusicRegs = registrationTracker();

// 5. Objects and Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const sampleEvent = new Event("Yoga Class", "2025-08-01", 20);
console.log(Object.entries(sampleEvent));

// 6. Arrays and Methods
events.push({ name: "Baking Workshop", date: "2025-09-01", seats: 15, category: "Workshop" });
const musicEvents = events.filter(e => e.category === "Music");
const formatted = events.map(e => `Event: ${e.name}`);

// 7. DOM Manipulation
const container = document.querySelector("#event-container");
if (container) {
  events.forEach(e => {
    const card = document.createElement("div");
    card.className = "eventCard";
    card.innerHTML = `<h3>${e.name}</h3><p>Date: ${e.date}</p><p>Seats: ${e.seats}</p>`;
    container.appendChild(card);
  });
}

// 8. Event Handling
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".registerBtn").forEach(btn => {
    btn.onclick = () => alert("Registered!");
  });

  const filter = document.getElementById("categoryFilter");
  if (filter) {
    filter.onchange = (e) => {
      const selected = e.target.value;
      filterEventsByCategory(selected, console.log);
    };
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      alert("Quick search triggered");
    }
  });
});

// 9. Async JS, Promises, Async/Await
async function fetchEvents() {
  try {
    document.body.classList.add("loading");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Fetched:", data.slice(0, 3));
  } catch (err) {
    console.error("Fetch error:", err);
  } finally {
    document.body.classList.remove("loading");
  }
}
fetchEvents();

// 10. Modern JavaScript Features
const formatEvent = ({ name, date, seats }) => `${name} on ${date} (${seats} seats)`;
const cloneEvents = [...events];

// 11. Working with Forms
document.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.elements["name"].value;
  const email = e.target.elements["email"].value;
  const selectedEvent = e.target.elements["event"].value;

  if (!name || !email) {
    alert("Please fill out all fields.");
    return;
  }

  console.log("Submitted:", { name, email, selectedEvent });
});

// 12. AJAX & Fetch API
function submitRegistration(userData) {
  console.log("Submitting user:", userData);
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        alert("Registration successful!");
        console.log(data);
      })
      .catch(err => console.error("Submission failed", err));
  }, 1000);
}

// 13. Debugging and Testing
function debugRegistration(formData) {
  console.log("Form Data:", formData);
  debugger;
  submitRegistration(formData);
}

// 14. jQuery & Framework Mention
$(document).ready(function () {
  $("#registerBtn").click(() => alert("Registered with jQuery!"));
  $(".eventCard").fadeIn();

  // Benefit of frameworks:
  // React and Vue offer component-based design, state management, and better scalability.
});
