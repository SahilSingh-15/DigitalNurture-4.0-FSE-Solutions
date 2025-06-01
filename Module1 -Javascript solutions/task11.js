document.querySelector("#registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, eventSelect } = this.elements;

  if (!name.value || !email.value) {
    alert("All fields are required!");
    return;
  }

  console.log(`Name: ${name.value}, Email: ${email.value}, Event: ${eventSelect.value}`);
});
