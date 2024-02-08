const startButton = document.getElementById('start');
const mainPage = document.getElementById('main_page');
const video1 = document.getElementById('vid1');
const video2 = document.getElementById('vid2');
const prepButton = document.getElementById('two');
const prepText = document.getElementById('prepText');
const gameBut = document.getElementById('startBut');
const end = document.getElementById('final');

const m = document.getElementById('M');
const n = document.getElementById('N');
const o = document.getElementById('O');
const p = document.getElementById('P');


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

    let tex = "";
    lastPlay = now;

    for (let i = 0; i < 4; i++)
    {
        let x = clapTimes[i];
        let skeet = Math.abs(x - dif);
        if (skeet <= 60)        // Marvelous +- 30ms
        {
            prepText.textContent = "Marvelous!!!";
            console.log("nice");
            tex = "POG 🎉"
            marv++;
            break;
        } else if (skeet <= 90) // Perfect +- 60 ms
        {
            prepText.textContent = "Perfect!!";
            console.log('cool');
            perf++;
            tex = "Lez Gooo!";
            break;
        } else if (skeet <= 120) // mid +- 100 ms
        {
            prepText.textContent = "Mid!";
            console.log('lol');
            mid++;
            tex = "Hahahaa fuck you";
            break;
        } else       // Fucking Terrible +- >90
        {
            if (i === 3)
            {
                prepText.textContent = "L 🗿";
                console.log('L');
                L++;
                tex = "L+ Ratio";
            }
        }
    }

    // Create Text

    const animatedText = document.createElement('div');
    animatedText.textContent = tex;
    animatedText.className = 'animated-text';

    // Set random initial positions
    animatedText.style.left = Math.random() * 100 + 'vw';
    animatedText.style.top = Math.random() * 100 + 'vh';

    document.body.appendChild(animatedText);


}



// Game Prep

async function gamePrep() {
    prepButton.classList.remove('hide');

}

function applyRainbowEffect(elementId) {
    var rainbowText = document.getElementById(elementId);

    if (rainbowText) {
        var text = rainbowText.innerText;
        var colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#3399ff', '#9933ff', '#ff33cc'];
        var interval = 500; // Change color every 500 milliseconds
        var index = 0;

        function updateColors() {
            var spannedText = '';

            for (var i = 0; i < text.length; i++) {
                var char = text.charAt(i);
                var color = colors[(i + index) % colors.length];
                spannedText += '<span style="color: ' + color + ';">' + char + '</span>';
            }

            rainbowText.innerHTML = spannedText;
            index = (index + 1) % colors.length;
        }

        // Initial call and setup the interval
        updateColors();
        setInterval(updateColors, interval);
    }
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

    m.textContent = `Marvelous: ${marv}`;
    n.textContent = `perfect: ${perf}`;
    o.textContent = `Mid: ${mid}`;
    p.textContent = `L's Taken: ${L}`;

    applyRainbowEffect('haha');
    
  });