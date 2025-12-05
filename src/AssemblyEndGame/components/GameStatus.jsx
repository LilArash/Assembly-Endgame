import React from 'react'
import dataContext from '../../context/AssemblyEndgameContext'
import { getFarewellText } from '../utils'
import clsx from 'clsx'

const GameStatus = () => {
    const { isGameOver, isGameLost, isGameWon,  isLastGuessedWrong, languages, wrongGuesses } = React.useContext(dataContext)
    const gameStatus = clsx("status", {
        won: isGameWon,
        lost: isGameLost,
        farwell: !isGameOver && isLastGuessedWrong
    })

    function renderGamestatus() {
        if (!isGameOver && isLastGuessedWrong) {
            return <p>
                {getFarewellText(languages[wrongGuesses - 1].name)}
            </p>
        }
        if (isGameWon) {
            return <p>Congrats! You Won!</p>
        }
        if (isGameLost) {
            return <p>You Lost, Better Luck Next Time.</p>
        }
    }

    return (
        <div aria-live="polite" role="status" className={gameStatus}>
            {renderGamestatus()}
        </div>
    )
}

export default GameStatus