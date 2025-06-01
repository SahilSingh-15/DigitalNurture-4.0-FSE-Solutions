const cloneEvents = [...events];

function displayEvent({ name, date }) {
  console.log(`📅 ${name} on ${date}`);
}

function register(event, user = "Guest") {
  console.log(`${user} registered for ${event.name}`);
}
