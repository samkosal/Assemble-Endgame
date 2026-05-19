import { useState, useEffect } from "react"
import { languages } from "./languages"
import { clsx } from "clsx"
export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([]);
    console.log(guessedLetters)


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

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span
                className="chip"
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    }) 
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p> guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>

            <section className="game-status">
                <h2>You win!</h2>
                <p> Well done!</p>
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
            <button className="new-game">New Game</button>
        </main>
    )
}
