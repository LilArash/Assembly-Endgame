import React from 'react'
import dataContext from '../../context/AssemblyEndgameContext'
import clsx from 'clsx'

const Letters = () => {

    const { currentWord, isGameLost, guessedLetters } = React.useContext(dataContext)

    return (
        <div className="letter-container">
            {
                currentWord.split('').map((letter, index) => {
                    const revealLetter = isGameLost || guessedLetters.includes(letter)
                    const letterClass = clsx(
                        isGameLost && !guessedLetters.includes(letter) && "missed-letter"
                    )
                    return <span key={index} className={letterClass}>
                        {
                            revealLetter &&
                            letter.toUpperCase()
                        }
                    </span>
                })
            }
        </div>
    )
}

export default Letters