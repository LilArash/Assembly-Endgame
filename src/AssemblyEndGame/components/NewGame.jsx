import React from 'react'
import dataContext from '../../context/AssemblyEndgameContext'
import { getRandomWord } from '../utils'

const NewGame = () => {

    const {setCurrentWord, setGuessedLetters} = React.useContext(dataContext)

    function newGame() {
        setCurrentWord(getRandomWord)
        setGuessedLetters([])
    }

    return (
        <div className="button-container">
            <button onClick={newGame} className="new-game">new game</button>
        </div>

    )
}

export default NewGame