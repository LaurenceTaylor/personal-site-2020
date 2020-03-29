const NUMBER_OF_BACKGROUNDS = 5;

let backgroundNumber = Math.floor(Math.random() * NUMBER_OF_BACKGROUNDS);

const setBackground = backgroundNumber => {
  const bg = document.querySelector("#bg");
  bg.setAttribute("src", `./assets/backgrounds/${backgroundNumber + 1}.jpg`);
};

const rotateBackground = () => {
  backgroundNumber = (backgroundNumber + 1) % NUMBER_OF_BACKGROUNDS;
  setBackground(backgroundNumber);
};

window.onload = () => {
  setBackground(backgroundNumber);

  const refreshIcon = document.querySelector("#refresh");
  refreshIcon.onclick = rotateBackground;
};
