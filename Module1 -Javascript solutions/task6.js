let events = [];

events.push({ name: "Cooking Workshop", category: "Workshop" });

const musicEvents = events.filter(e => e.category === "Music");

const formatted = events.map(e => `Event: ${e.name}`);
console.log(formatted);
