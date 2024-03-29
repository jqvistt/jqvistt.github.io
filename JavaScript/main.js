document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("fade-in");
  document.getElementById("name").classList.add("fade-in");

  const nameElement = document.getElementById("name");
  const jobTitleElement = document.getElementById("jobTitle");

  setTimeout(function () {
    nameElement.classList.add("slide-in");
  }, 100);

  setTimeout(function () {
    jobTitleElement.classList.add("slide-in");
  }, 200);
});

function DisplayScrollDownPrompt() {
  ScrollDownPrompt.classList.add("fade-in");
}
