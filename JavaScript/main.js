const ScrollDownPrompt = document.getElementById("scrollDownPrompt");

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("fade-in");

  setTimeout(function () {
    DisplayScrollDownPrompt();
  }, 5000);
});

document.addEventListener("click", function () {
  console.log("clicked");
});

function DisplayScrollDownPrompt() {
  ScrollDownPrompt.classList.add("fade-in");
}

window.addEventListener("scroll", function () {
  ScrollDownPrompt.classList.remove("fade-in");
});
