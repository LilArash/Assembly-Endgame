import { createContext, useState} from "react";
import { languages } from "../AssemblyEndGame/Languages"
import { getRandomWord } from "../AssemblyEndGame/utils"

const dataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const wrongGuesses = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameLost = wrongGuesses >= languages.length - 1
    const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter))
    const isGameOver = isGameWon || isGameLost
    const lastGuessed = guessedLetters[guessedLetters.length - 1]
    const isLastGuessedWrong = lastGuessed && !currentWord.includes(lastGuessed)

    return <dataContext.Provider value={
        {
            isGameOver, isGameLost, isGameWon,  
            isLastGuessedWrong, languages, wrongGuesses,
            guessedLetters, setGuessedLetters, currentWord, setCurrentWord, alphabet
        }
    }>
        {children}
    </dataContext.Provider>
}

export default dataContext