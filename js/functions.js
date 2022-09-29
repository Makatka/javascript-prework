function printMessage(msg){
    document.getElementById('messages').innerHTML = msg;
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove){
    let messageHtml = '';
    if((argPlayerMove == 'papier' && argComputerMove == 'kamień') || ((argPlayerMove == 'nożyce' && argComputerMove == 'papier')) || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')) {
        messageHtml += '<h1>Wygrywasz!</h1>';
        playerPoint++;
    } else if (argPlayerMove == argComputerMove) {
        messageHtml += '<h1>Remis</h1>';
    } else {
        messageHtml += '<h1>Przegrywasz</h1>';
        cpuPoint++;
    }
    messageHtml += ('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    printMessage(messageHtml);
    playerResult.innerHTML = playerPoint;
    cpuResult.innerHTML = cpuPoint;
}

function buttonClicked (argButtonName) {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    displayResult(argButtonName, computerMove);
}

function newGame() {
     playerPoint = 0;
     cpuPoint = 0;
    playerResult.innerHTML = playerPoint;
    cpuResult.innerHTML = cpuPoint;
    printMessage('<h1>Zagraj</h1>');
}