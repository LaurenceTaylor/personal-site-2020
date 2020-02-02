const numberOfBackgrounds = 6;

const setBackgroundImage = () => {
    const html = document.querySelector('html');
    const randomNumber = Math.floor(Math.random() * numberOfBackgrounds) + 1;
    html.style.backgroundImage = `url(./assets/backgrounds/${randomNumber}.gif)`
}

window.onload = () => {
    setBackgroundImage();
};
