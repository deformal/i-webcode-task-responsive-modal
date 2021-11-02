import React, { useState } from 'react'
import "./timeframe.css"

export default function Timeframe() {
    const [days, setDays] = useState([
        "1Day",
        "7Days",
        "30Days",
        "1Year",
        "5Year",
        "6Year",
        "7Year"
    ])
    const [selected, select] = useState("Tier1")

    const onselectHandle = (e) => (value) => {
        select(e)
    }
    return (
        <div className="timeframebody" >
            <header>
                <h3>Timeframe</h3>
            </header>
            <div className="days" >
                {
                    days.map(e => (
                        <h6
                            key={e}
                            onClick={onselectHandle(e)}
                            className={selected === e ? "selected" : "notselected"}
                            name={e}
                        >
                            {
                                e
                            }
                        </h6>
                    ))
                }
            </div>
        </div>
    )
}
