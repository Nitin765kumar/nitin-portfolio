document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out! I will contact you soon.");
    });
  }

  window.toggleProjects = function () {
    const moreProjects = document.getElementById("more-projects");
    const btn = document.getElementById("toggle-btn");

    moreProjects.classList.toggle("d-none");

    if (moreProjects.classList.contains("d-none")) {
      btn.innerText = "Show More Projects";
    } else {
      btn.innerText = "Show Less";
    }
  };

});
