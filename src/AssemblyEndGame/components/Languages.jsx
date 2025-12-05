import React from 'react'
import dataContext from '../../context/AssemblyEndgameContext'
import { languages } from '../Languages'

const Languages = () => {

    const { wrongGuesses } = React.useContext(dataContext)

    return (
        <div className="languauges-container">
            {
                languages.map((language, index) => {
                    return <span key={language.name}
                        style={{
                            backgroundColor: language.backgroundColor,
                            color: language.color
                        }} className={`language-badge ${index < wrongGuesses && "lost"}`}>
                        {language.name}
                    </span>
                })
            }
        </div>
    )
}

export default Languages