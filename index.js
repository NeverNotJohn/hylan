const startButton = document.getElementById('start');
const mainPage = document.getElementById('main_page');
const video1 = document.getElementById('vid1');
const video2 = document.getElementById('vid2');
const prepButton = document.getElementById('two');
const prepText = document.getElementById('prepText');
const gameBut = document.getElementById('startBut');
const end = document.getElementById('final');


const video = document.getElementById('vid1');
video1.setAttribute("playsinline", true);
video2.setAttribute("playsinline", true);


let clapsound = document.getElementById('clapsound');
var start = 0;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

startButton.addEventListener('click', function() {
    // Remove Front Page
    startButton.parentNode.removeChild(startButton);
    mainPage.innerHTML = '';

    // Start Game
    gamePrep();
})

// clap time

const clapTimes = [17186,17369,30011,30016];
let lastPlay = 0;

// Scores

let marv = 0;
let perf = 0;
let mid = 0;
let L = 0;

function clapSound() {
   
    clapsound.play();
    
    var now = Date.now();
    var dif = now - start;
    
    if (now - lastPlay < 150)
    {
        return;
    }

    lastPlay = now;

    for (let i = 0; i < 4; i++)
    {
        let x = clapTimes[i];
        let skeet = Math.abs(x - dif);
        if (skeet <= 60)        // Marvelous +- 30ms
        {
            prepText.textContent = "Marvelous!!!";
            console.log("nice");
            marv++;
            break;
        } else if (skeet <= 90) // Perfect +- 60 ms
        {
            prepText.textContent = "Perfect!!";
            console.log('cool');
            perf++;
            break;
        } else if (skeet <= 120) // mid +- 100 ms
        {
            prepText.textContent = "Mid!";
            console.log('lol');
            mid++;
            break;
        } else       // Fucking Terrible +- >90
        {
            if (i === 3)
            {
                prepText.textContent = "L 🗿";
                console.log('L');
                L++;
            }
        }
    }


}



// Game Prep

async function gamePrep() {
    prepButton.classList.remove('hide');

}

// Actual Game Start

async function gameStart() {

    gameBut.remove();

    video1.style.display = 'block';
    video2.style.display = 'block';

    await sleep(1000);

    video1.play();
    video2.play();

    start = Date.now();

}

// End of game

video.addEventListener("ended", function() {
    video1.style.display = 'none';
    video2.style.display = 'none';
    prepButton.style.display = 'none';

    final.classList.remove('hide');
    
  });