let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;
let yourScore = localStorage.getItem('yourScore') ? parseInt(localStorage.getItem('yourScore')) : 0;


document.getElementById('computerScore').textContent = computerScore;
document.getElementById('yourScore').textContent = yourScore;

function getcomputerscore() {
    const s = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * s.length);
    return s[randomIndex];
}

function playGame(player) {
    const computer = getcomputerscore();
    hideAll();
    displayResult(player, computer);

    if (player === computer) {
        document.getElementById('screen3').style.display = 'block';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        document.getElementById('screen1').style.display = 'block';
        yourScore++;
        document.getElementById('yourScore').textContent = yourScore;
        localStorage.setItem('yourScore', yourScore);
    } else {
        document.getElementById('screen2').style.display = 'block';
        computerScore++;
        document.getElementById('computerScore').textContent = computerScore;
        localStorage.setItem('computerScore', computerScore);
    }
}

function hideAll() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'none';
    document.getElementById('screen3').style.display = 'none';
    document.getElementById('rocksci').style.display = 'none';
    document.getElementById('scipaper').style.display = 'none';
    document.getElementById('paprock').style.display = 'none';
    document.getElementById('rockpap').style.display = 'none';
    document.getElementById('papsci').style.display = 'none';
    document.getElementById('scirock').style.display = 'none';
    document.getElementById('rockrock').style.display = 'none';
    document.getElementById('scisci').style.display = 'none';
    document.getElementById('pappap').style.display = 'none';
    
    
}

function displayResult(player, computer) {
    if (player === 'rock' && computer === 'scissors') {
        document.getElementById('rocksci').style.display = 'block';
    } else if (player === 'scissors' && computer === 'paper') {
        document.getElementById('scipaper').style.display = 'block';
    } else if (player === 'paper' && computer === 'rock') {
        document.getElementById('paprock').style.display = 'block';
    } else if (player === 'rock' && computer === 'paper') {
        document.getElementById('rockpap').style.display = 'block';
    } else if (player === 'paper' && computer === 'scissors') {
        document.getElementById('papsci').style.display = 'block';
    } else if (player === 'scissors' && computer === 'rock') {
        document.getElementById('scirock').style.display = 'block';
    } else if (player === 'rock' && computer === 'rock') {
        document.getElementById('rockrock').style.display = 'block';
    } else if (player === 'scissors' && computer === 'scissors') {
        document.getElementById('scisci').style.display = 'block';
    } else if (player === 'paper' && computer === 'paper') {
        document.getElementById('pappap').style.display = 'block';
    }
}

function reset() {
    hideAll();
    document.getElementById('nextpage').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('container').style.display = 'block';
}
function nextpage()
{
    hideAll();
    document.getElementById('nextpage').style.display='block';
    document.getElementById('container').style.display = 'none';
}
function openrules() {
    document.getElementById('gamerules').style.display = 'block';
    document.getElementById('closerules').style.display = 'block';
    document.getElementById('closeimg').style.display = 'block';
}

function closerules() {
    document.getElementById('gamerules').style.display = 'none';
    document.getElementById('closerules').style.display = 'none';
    document.getElementById('closeimg').style.display = 'none';
}
function openrules1() {
    document.getElementById('gamerules1').style.display = 'block';
    document.getElementById('closerules1').style.display = 'block';
    document.getElementById('closeimg1').style.display = 'block';
}

function closerules1() {
    document.getElementById('gamerules1').style.display = 'none';
    document.getElementById('closerules1').style.display = 'none';
    document.getElementById('closeimg1').style.display = 'none';
}
function openrules2() {
    document.getElementById('gamerules2').style.display = 'block';
    document.getElementById('closerules2').style.display = 'block';
    document.getElementById('closeimg2').style.display = 'block';
}

function closerules2() {
    document.getElementById('gamerules2').style.display = 'none';
    document.getElementById('closerules2').style.display = 'none';
    document.getElementById('closeimg2').style.display = 'none';
}
function openrules3() {
    document.getElementById('gamerules3').style.display = 'block';
    document.getElementById('closerules3').style.display = 'block';
    document.getElementById('closeimg3').style.display = 'block';
}

function closerules3() {
    document.getElementById('gamerules3').style.display = 'none';
    document.getElementById('closerules3').style.display = 'none';
    document.getElementById('closeimg3').style.display = 'none';
}
function openrules4() {
    document.getElementById('gamerules4').style.display = 'block';
    document.getElementById('closerules4').style.display = 'block';
    document.getElementById('closeimg4').style.display = 'block';
}

function closerules4() {
    document.getElementById('gamerules4').style.display = 'none';
    document.getElementById('closerules4').style.display = 'none';
    document.getElementById('closeimg4').style.display = 'none';
}
document.getElementById('playagain').addEventListener('click', reset);
