  const linkedinLink = document.getElementById("linkedin-link");

  linkedinLink.addEventListener("click", function (event) {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      event.preventDefault();

      window.location.href =
        "linkedin://in/michael-bellotti-6b9b7a29a";

      setTimeout(function () {
        window.location.href =
          "https://www.linkedin.com/in/michael-bellotti-6b9b7a29a/";
      }, 1200);
    }
  });