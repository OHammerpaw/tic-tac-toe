const gameBoard = document.querySelector('.game-board')
const gameBoardId = document.querySelector('#game-board')
const gameSpace = document.querySelector('.game-space')
const newGame = document.querySelector('#new-game')
const playerComputer = document.querySelector('#computer-player')
const space1 = document.querySelector('#space1')

const playerX = 'X'
const playerO = 'O'
let turnCount = 0

const winConditions = [
    ['space1', 'space2', 'space3'],
    ['space4', 'space5', 'space6'],
    ['space7', 'space8', 'space9'],
    ['space1', 'space4', 'space7'],
    ['space2', 'space5', 'space8'],
    ['space3', 'space6', 'space9'],
    ['space3', 'space5', 'space7'],
    ['space1', 'space5', 'space9']   
]

let currentSelection = 'X'

const turn = (element) => {
    let innerHTML = document.getElementById(element.currentTarget.id).innerHTML
    if(checkIfEmpty(innerHTML)== true) {
        document.getElementById(element.currentTarget.id).innerHTML = currentSelection  
        if (checkForWin() == true) {     
            document.querySelector('.end-game-text').textContent = ("Player " + currentSelection + " wins!")
            endGame()
        } else {
            if(currentSelection == 'X') {
                currentSelection ='O';
            } else {
                currentSelection = 'X';
            }
        }
        } 
        turnCount ++
        if (turnCount == 9) {
            document.querySelector('.end-game-text').textContent = ("It's a cat's game!") 
            endGame()
        }
}


const checkIfEmpty = (innerHTML) => {
    if(innerHTML == '' || innerHTML == null) {
        return true
    } 
    return false
}

const getGameSpaces = () => {
    let parent = document.getElementById('game-board');
    return Array.from(parent.getElementsByTagName('div'))
}

const resetGame = () => {
	getGameSpaces().forEach(gameSpace => {
		gameSpace.innerHTML = ''
		gameSpace.classList.remove(currentSelection)
		gameSpace.removeEventListener('click', turn)
		gameSpace.addEventListener('click', turn, { once: true })
        currentSelection = 'X'
        turnCount = 0
        document.querySelector('.end-game-text').textContent = ('')
	})
}

newGame.addEventListener('click', resetGame)

const checkForWin = () => {
    for(let i = 0; i < winConditions.length; i++) {
        let item1 = document.getElementById(winConditions[i][0]).innerHTML
        let item2 = document.getElementById(winConditions[i][1]).innerHTML
        let item3 = document.getElementById(winConditions[i][2]).innerHTML
        if (checkIfEmpty(item1) === false && checkIfEmpty(item2) === false && checkIfEmpty(item3) === false) {
            if (item1 === item2 && item2 === item3) {
                return true
            }    
        }
    }
    return false

    }

const endGame = () => {
    document.querySelectorAll('.game-space').forEach( item => {
        item.removeEventListener('click', turn)
    })
}

document.querySelectorAll('.game-space').forEach( item => {
    item.addEventListener('click', turn)
})

