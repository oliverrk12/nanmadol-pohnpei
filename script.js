document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      let isValid = true;

      if (!name.value.trim()) {
        name.classList.add("is-invalid");
        isValid = false;
      } else {
        name.classList.remove("is-invalid");
      }

      if (!email.value.trim() || !email.value.includes("@")) {
        email.classList.add("is-invalid");
        isValid = false;
      } else {
        email.classList.remove("is-invalid");
      }

      if (!message.value.trim()) {
        message.classList.add("is-invalid");
        isValid = false;
      } else {
        message.classList.remove("is-invalid");
      }

      if (isValid) {
        successMessage.style.display = "block";
        form.reset();
      }
    });
  }

});
