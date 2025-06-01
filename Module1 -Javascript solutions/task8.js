document.querySelectorAll(".registerBtn").forEach(btn => {
  btn.onclick = () => alert("Registered!");
});

document.querySelector("#categoryFilter").onchange = function () {
  console.log("Filtered category: " + this.value);
};

document.querySelector("#searchInput").onkeydown = function (e) {
  console.log("Searching for: " + e.target.value);
};
