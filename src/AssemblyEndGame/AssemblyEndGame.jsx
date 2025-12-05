import ReactConfetti from "react-confetti"
import dataContext from '../context/AssemblyEndgameContext'
import GameStatus from "./components/GameStatus"
import Languages from "./components/Languages"
import Letters from "./components/Letters"
import ScreenReaderOnly from "./components/ScreenReaderOnly"
import Keyboard from "./components/Keyboard"
import NewGame from "./components/NewGame"
import { languages } from "./Languages"
import { useContext } from "react"

export function AssemblyEndGame() {

    const { isGameWon, isGameOver } = useContext(dataContext)
    
    return (
        <main>
            {
                isGameWon  && <ReactConfetti recycle={false}/>
            }
            <header>
                <h1>Assembly Endgame</h1>
                <p>Guess the word within {languages.length - 1} attempts or you have to start over with assembly</p>
            </header>
            <GameStatus />
            <Languages />
            <Letters />
            {/* sr-only is visually hidden */}
            <ScreenReaderOnly />
            <Keyboard />
            {
                isGameOver &&
                <NewGame />
            }
        </main>
    )
}