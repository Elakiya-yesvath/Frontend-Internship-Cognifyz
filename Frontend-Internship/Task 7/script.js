function changeBackground() {
  const colors = ["#f4a261", "#a8dadc", "#ffb4a2", "#cdb4db", "#bde0fe", "#e0fbfc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
