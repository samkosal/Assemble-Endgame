import { useState } from "react"
import { languages } from "./languages"
export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")

    // learn something new 
    // array of spans → render directly
    // array of letters → map to spans before rendering
    // const letterElements = (() => {
    //     const elems = []
    //     for (let i = 0; i < currentWord.length; i++) {
    //         elems.push(
    //             <span key={i}>{currentWord[i]}</span>
    //         )
    //     }
    //     console.log(elems)
    //     return elems
    // })
    const letterElements = currentWord.split("").map(current => {
        return <span>{current.toUpperCase()}</span>
    })

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
        </main>
    )
}
