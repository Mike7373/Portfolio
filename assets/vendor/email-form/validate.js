  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const loadingMessage = contactForm.querySelector(".loading");
    const errorMessage = contactForm.querySelector(".error-message");
    const successMessage = contactForm.querySelector(".sent-message");
    const submitButton = contactForm.querySelector('button[type="submit"]');

    loadingMessage.style.display = "block";
    errorMessage.style.display = "none";
    successMessage.style.display = "none";
    submitButton.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      contactForm.reset();
      successMessage.style.display = "block";
    } catch (error) {
      errorMessage.textContent =
        "Sorry, your message could not be sent. Please try again later.";
      errorMessage.style.display = "block";
    } finally {
      loadingMessage.style.display = "none";
      submitButton.disabled = false;
    }
  });