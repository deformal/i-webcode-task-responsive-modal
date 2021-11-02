import React, { useState } from 'react'
import "./accapy.css"
import Toggle from "../toggle/Toggle"

export default function AccelerateAPY() {
    const [tier, setDays] = useState([
        "Tier1",
        "Tier2",
        "Tier3",
        "Tier4",
        "Tier5",
        "Tier6",
        "Tier7",
    ])
    const [selected, select] = useState("Tier1")

    const onselectHandle = (e) => (value) => {
        select(e)
    }
    return (
        <div className="accapybody" >
            <header>
                <h3>Enable Accelerated APY</h3>
                <Toggle size={1.5} status={"on"} />
            </header>
            <h5>Select Tier</h5>
            <div className="tiers" >
                {
                    tier.map(e => (
                        <h6
                            onClick={onselectHandle(e)}
                            className={selected === e ? "selected" : "notselected"}
                            name={e}
                            key={e}
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
