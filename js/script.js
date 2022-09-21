var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var argButtonName;

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked (argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    }


buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});







