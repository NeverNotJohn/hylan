const startButton = document.getElementById('start');
const mainPage = document.getElementById('main_page');

startButton.addEventListener('click', function() {
    // Remove Front Page
    startButton.parentNode.removeChild(startButton);
    mainPage.innerHTML = '';
    mainPage.parentNode.removeChild(allDiv);
    document.documentElement.style.height = '100vh';
    document.body.style.height = '100vh';

    // Start Game
    gameStart();
})


// Actual Game Start

function gameStart() {

}