const sections = document.querySelectorAll(".section");

function calculateOpacity(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Define a visibility threshold (adjust as needed)
  const visibilityThreshold = 0.5;

  // Calculate the visibility of the element in the viewport
  const visibility = Math.max(
    0,
    Math.min((viewportHeight - rect.top) / viewportHeight, 1)
  );

  // Check if the element is mostly visible based on the threshold
  return visibility >= visibilityThreshold ? 1 : 0;
}

function updateOpacity() {
  sections.forEach((section) => {
    const opacity = calculateOpacity(section);
    section.style.opacity = opacity;

    // Add fade-in class to fully visible sections
    if (opacity === 1) {
      section.classList.add("fade-in");
    } else {
      section.classList.remove("fade-in");
    }
  });
}

// Initial update of opacity
updateOpacity();

// Update opacity when scrolling
window.addEventListener("scroll", function () {
  updateOpacity();
});

// Scroll to the next section when the user clicks
document.addEventListener("click", function () {
  const currentSection = getCurrentSection();
  if (currentSection) {
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Scroll to the top when the page is reloaded
window.onload = function () {
  window.scrollTo(0, 0);
};
