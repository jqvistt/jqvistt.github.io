const svgContainer = document.getElementById("ParallaxBackground");

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

  // Adjust the lightness based on the scale
  const lightness = 70 - randomScale * 20; // Adjust the range as needed
  BGTreeSvgElement.style.filter = `brightness(${lightness}%)`;

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

function generateDust() {
  const DustElement = document.createElement("i");
  DustElement.classList.add("glyphicon");
  DustElement.classList.add("glyphicon-stop");
  DustElement.classList.add("BGDustElement");
  DustElement.style.left = `${Math.floor(Math.random() * 100) + 1}vw`;
  DustElement.style.top = `${Math.floor(Math.random() * 100) + 1}vh`;

  const randomScale = Math.random() * (1.5 - 0.5) + 0.5;
  DustElement.style.transform = `scale(${randomScale})`;
}

function generateRandomDust() {
  setInterval(() => {
    generateDust();
  }, 200);
}

generateRandomSVGs();
generateRandomDust();
