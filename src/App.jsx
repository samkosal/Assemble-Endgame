import { useState, useEffect } from "react"
import { languages } from "./languages"
import { clsx } from "clsx"
export default function AssemblyEndgame() {

    // state values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([]);
    console.log(guessedLetters)

    //derived values
    const wrongGuessCount = 
        guessedLetters.filter(letter => !currentWord.includes(letter)).length;
    console.log(wrongGuessCount)
    
    const isGameWon = 
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1;
    const isGameOver = isGameWon || isGameLost;
    // static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz";


    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        )
    }

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong

        })

        console.log(className)
        return (
            <button 
                className={className}
                key={letter} 
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button> 
        ) 
    })
    // learn something new 
    // array of spans → render directly
    // array of letters → map to spans before rendering 
    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>{guessedLetters.includes(letter) && letter.toUpperCase()}</span>
    ))

    const languageElements = languages.map((lang, index) => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className = index < wrongGuessCount ? "lost" : ""
        return (
            <span
                className={`chip ${className}`}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    }) 

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost 
    })
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p> guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>

            <section className="game-status">
                {isGameOver ? (
                    isGameWon ? (
                        <>
                            <h2>You win!</h2>
                            <p>Well done! 🎉</p>
                        </>
                    ) : (
                        <>
                            <h2>Game over!</h2>
                            <p>You lose! Better start learning Assembly 😭</p>
                        </>
                    )
                ) : (
                        null
                    )
                }
            </section>

            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">
                {letterElements}
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}
