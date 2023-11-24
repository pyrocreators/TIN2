document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const quantity = document.getElementById("quantity").value;

    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (!validateEmail(email)) {
      alert("Email is not valid");
      return;
    }

    document.getElementById(
      "output"
    ).innerHTML = `Name: ${name}<br>Email: ${email}<br>Birthdate: ${birthdate}<br>Quantity: ${quantity}`;
  });
