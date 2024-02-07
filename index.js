const startButton = document.getElementById('start');
const mainPage = document.getElementById('main_page');
const video1 = document.getElementById('vid1');
const video2 = document.getElementById('vid2');
const prepButton = document.getElementById('two');
const prepText = document.getElementById('prepText');

let clapsound = new Audio('static/audio/clap.mp3');

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

startButton.addEventListener('click', function() {
    // Remove Front Page
    startButton.parentNode.removeChild(startButton);
    mainPage.innerHTML = '';

    // Start Game
    gamePrep();
})

function clapSound() {
    clapsound.play();
}

// Game Prep

async function gamePrep() {
    prepButton.classList.remove('hide');
}

// Actual Game Start

async function gameStart() {

    prepButton.removeChild(prepText);

    video1.style.display = 'block';
    video2.style.display = 'block';

    await sleep(1000);

    video1.play();
    video2.play();
}