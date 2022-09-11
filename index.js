const gameBoard = document.querySelector('.game-board')
const gameBoardId = document.querySelector('#game-board')
const gameSpace = document.querySelector('.game-space')
const newGame = document.querySelector('#new-game')
const playerComputer = document.querySelector('#computer-player')
const space1 = document.querySelector('#space1')

const playerX = 'X'
const playerO = 'O'
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

let nextSelection = 'X'

const turn = (element) => {
    let innerHTML = document.getElementById(element.currentTarget.id).innerHTML
    if(checkIfEmpty(innerHTML)== true) {
        document.getElementById(element.currentTarget.id).innerHTML = nextSelection
        if(nextSelection == 'X') {
            nextSelection ='O';
        } else {
            nextSelection = 'X';
        }
    } 
    let win = checkForWin()
    console.log(win)
    if (win == true) {
        
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
		gameSpace.classList.remove(nextSelection)
		gameSpace.removeEventListener('click', turn)
		gameSpace.addEventListener('click', turn, { once: true })
        nextSelection = 'X'
	})
}

newGame.addEventListener('click', resetGame)

const checkForWin = () => {
    let conditions = winConditions[0]
    for(let i = 0; i < conditions.length; i++) {
        let item1 = document.getElementById(conditions[0]).innerHTML.trim()
        let item2 = document.getElementById(conditions[1]).innerHTML.trim()
        let item3 = document.getElementById(conditions[2]).innerHTML.trim()

        if (item1 == item2 && item2 == item3) {
            return true
        }    
    }
    return false

    }
    // winConditions.forEach(condition => {

    //     let item1 = document.getElementById(condition[0]).innerHTML.trim()
    //     let item2 = document.getElementById(condition[1]).innerHTML.trim()
    //     let item3 = document.getElementById(condition[2]).innerHTML.trim()

    //     if (item1 == item2 && item2 == item3) {
    //         return true
    //     }    
    // })
    // return false
// }

document.querySelectorAll('.game-space').forEach( item => {
    item.addEventListener('click', turn)
})