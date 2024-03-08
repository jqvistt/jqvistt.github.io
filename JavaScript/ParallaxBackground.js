const svgContainer = document.getElementById("ParallaxBackground");

function preloadImages() {
  for (let i = 1; i <= 3; i++) {
    const img = new Image();
    img.src = `Assets/ParallaxBackgroundSVG/Tree${i}.svg`;
  }
}

function createRandomSVG() {
  const BGTreeSvgElement = document.createElement("div");
  BGTreeSvgElement.classList.add("BGTreeSvgElement");
  BGTreeSvgElement.style.left = "100vw";

  const randomSVGNumber = Math.floor(Math.random() * 3) + 1;
  BGTreeSvgElement.innerHTML = `<img src="Assets/ParallaxBackgroundSVG/Tree${randomSVGNumber}.svg" alt="Random SVG">`;

  const randomScale = Math.random() * (1.5 - 0.5) + 0.5;
  BGTreeSvgElement.style.transform = `scale(${randomScale})`;

  BGTreeSvgElement.style.top = `${20 * randomScale}vw`;

  const baseDuration = 15; // Adjust the duration

  BGTreeSvgElement.style.animation = `moveLeft ${
    baseDuration / randomScale
  }s linear`;

  svgContainer.appendChild(BGTreeSvgElement);

  setTimeout(() => {
    svgContainer.removeChild(BGTreeSvgElement);
  }, baseDuration * 1000 + 1000);
}

function generateRandomSVGs() {
  setInterval(() => {
    createRandomSVG();
  }, 200);
}
generateRandomSVGs();
