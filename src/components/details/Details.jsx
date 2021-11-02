import React, { useState } from 'react'
import "./detail.css"
import up from "./up-arrow.png"
import down from "./down-arrow.png"

export default function Details() {
    const [showDetails, toggle] = useState(true)
    const list = [
        { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e." },
        { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo." },
        { id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do." },

    ]
    const onclickHandler = () => {
        if (showDetails) toggle(false)
        if (!showDetails) toggle(true)
    }
    return (
        <div className="details">
            <header>
                <h4 onClick={onclickHandler} >{showDetails ? "Hide Details" : "Show Detials"}</h4>
                {!showDetails ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </header>
            {showDetails
                ? <main>
                    <section className="detailsmainhead" >
                        <h2>APY</h2>
                        <h2 className="percentages" >9.0{" "}%</h2>
                    </section>
                    <section className="list" >
                        <ul>

                            {
                                list.map(e => (
                                    <li key={e.id} >
                                        {e.text}
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </main>
                : ""
            }
        </div>
    )
}
