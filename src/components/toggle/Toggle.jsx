import React, { useEffect, useState } from 'react'
import "./toggle.css"

export default function Toggle(props) {
    const [isOn, toggleStatus] = useState(true)

    let style = {
        height: props.size ? props.size + "em" : "1 em",
        width: props.size * 2 + "em",
        backgroundColor: "orange",
    }
    if (!isOn)
    {
        style = {
            height: props.size ? props.size + "em" : "1 em",
            width: props.size * 2 + "em",
            backgroundColor: "red",
        }
    }

    const toggleHandler = () => {
        if (isOn) toggleStatus(false)
        if (!isOn) toggleStatus(true)
    }

    return (
        <div
            className="togglebody"
            style={style}>
            <div
                className="togglecircle"
                style={{ right: isOn ? 0 : "", height: props.size + "em", width: props.size + "em" }}
                onClick={toggleHandler}
            ></div>
        </div>
    )
}
