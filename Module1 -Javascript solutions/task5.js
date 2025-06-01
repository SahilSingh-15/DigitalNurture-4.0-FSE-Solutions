function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const picnic = new Event("Picnic", "2025-06-20", 30);
console.log(Object.entries(picnic));
