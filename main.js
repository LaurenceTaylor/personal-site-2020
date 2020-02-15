const numberOfBackgrounds = 6;

const setBackground = () => {
    const video = document.querySelector('video');
    const randomNumber = Math.floor(Math.random() * numberOfBackgrounds) + 1;
    video.setAttribute('src', `./assets/backgrounds/${randomNumber}.mp4`);
    // html.style.backgroundImage = `url(./assets/backgrounds/${randomNumber}.gif)`
}

window.onload = () => {
    setBackground();
}
