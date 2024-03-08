document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("fade-in");
});

document.addEventListener("click", function () {
  console.log("clicked");
});

setTimeout(() => {
  IntroSequence();
}, 3000);
