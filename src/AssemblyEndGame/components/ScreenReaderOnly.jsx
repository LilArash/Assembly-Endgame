import React from 'react'
import dataContext from '../../context/AssemblyEndgameContext'
import { languages } from '../Languages'

const ScreenReaderOnly = () => {

    const { currentWord, lastGuessed, guessedLetters } = React.useContext(dataContext)

    return (
        <div className="sr-only" aria-live="polite" role="status">
            <p>
                {currentWord.includes(lastGuessed) ?
                    `Correct! the letter ${lastGuessed} is in the word` :
                    `Sorry, the letter ${lastGuessed} is not in the word`}
                You have {languages.length - 1} attempts left.
            </p>
            <p>
                Current Word: {
                    currentWord.split('').map(letter => {
                        return guessedLetters.includes(letter) ? letter : "blank"
                    }).join(" ")
                }
            </p>
        </div>
    )
}

export default ScreenReaderOnly