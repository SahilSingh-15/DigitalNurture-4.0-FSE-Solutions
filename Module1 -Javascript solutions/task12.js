document.querySelector("#registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    name: this.name.value,
    email: this.email.value,
    event: this.eventSelect.value
  };

  setTimeout(() => {
    fetch("https://mockapi.io/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => alert("Registration Successful"))
      .catch(err => alert("Error occurred"));
  }, 1500);
});
