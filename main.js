const NUMBER_OF_BACKGROUNDS = 6;

let backgroundNumber = Math.floor(Math.random() * NUMBER_OF_BACKGROUNDS);

const setBackground = backgroundNumber => {
  const video = document.querySelector("#bg-video");
  video.setAttribute("src", `./assets/backgrounds/${backgroundNumber}.mp4`);
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
