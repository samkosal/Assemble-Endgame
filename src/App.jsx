import React from "react"
import {languages} from "./languages"
export default function AssemblyEndgame() {


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
                {languages.map(language => (
                    <span 
                        className="chip"
                        key={language.name}
                        style={{
                            backgroundColor: language.backgroundColor,
                            color: language.color
                    }}>
                        {language.name}
                    </span>
                ))}
            </section>
        </main>
    )
}
