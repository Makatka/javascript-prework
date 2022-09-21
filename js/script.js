var computerMove;
computerMove = 'kamień';

var playerMove = 'papier'
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to' + playerMove + ', to wygrywasz!');

var randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: '+ randomNumber);

if (randomNumber == '1') {
    computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else if (randomNumber == '3') {
    computerMove = 'nożyce';
}  else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch ' + computerMove);

