const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const resetButton = document.getElementById('reset-btn')
const playerResult = document.getElementById('player');
const cpuResult = document.getElementById('cpu');
let playerPoint = 0
let cpuPoint = 0

buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});
resetButton.addEventListener('click', function () {
    newGame();
});







