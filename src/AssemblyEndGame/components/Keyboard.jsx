import React from 'react'
import dataContext from '../../context/AssemblyEndgameContext'
import { clsx } from "clsx"

const Keyboard = () => {
    const { guessedLetters, setGuessedLetters, currentWord, isGameOver, alphabet } = React.useContext(dataContext)

    function guess(letter) {
        setGuessedLetters(g => {
            // g.includes(e.target.innerText) ?
            //     g : [...g, e.target.innerText]
            const letterSet = new Set(g)
            letterSet.add(letter)
            return Array.from(letterSet)
        })
    }

    return (
        <div className="keyboard">
            {
                alphabet.split('').map(letter => {
                    const isGuessed = guessedLetters.includes(letter)
                    const isCorrect = isGuessed && currentWord.includes(letter)
                    const isWrong = isGuessed && !currentWord.includes(letter)
                    const className = clsx({
                        correct: isCorrect,
                        wrong: isWrong
                    })
                    return (
                        <button
                            key={letter}
                            onClick={() => guess(letter)}
                            className={className}
                            disabled={isGameOver}
                            aria-disabled={guessedLetters.includes(letter)}
                            aria-label={`letter ${letter}`}
                        >
                            {letter.toUpperCase()}
                        </button>
                    )
                })}
        </div>
    )
}

export default Keyboard