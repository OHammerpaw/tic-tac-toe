const gameBoard = document.querySelector('.game-board')
const gameSpace = document.querySelector('.game-space')
const newGame = document.querySelector('#new-game')
const playerComputer = document.querySelector('#computer-player')

console.log(gameBoard, gameSpace, newGame, playerComputer)

const gameBoard = {
    turn: true,
    xPlayer: [],
    oPlayer: [],
    winConditon: [
        ['space1', 'space2', 'space3'],
        ['space4', 'space5', 'space6'],
        ['space7', 'space8', 'space9'],
        ['space1', 'space4', 'space7'],
        ['space2', 'space5', 'space8'],
        ['space3', 'space6', 'space9'],
        ['space3', 'space5', 'space7'],
        ['space1', 'space5', 'space9']
    ]
}




