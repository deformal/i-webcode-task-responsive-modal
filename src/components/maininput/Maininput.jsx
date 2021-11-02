import React from 'react'
import "./maininput.css"
import Toggle from '../toggle/Toggle'

export default function Maininput() {
    const options = ["1000", "100"]

    return (
        <div className="maininputbody" >
            <section className="a" >
                <h1></h1>
                <div>
                    <section className="cake" >
                        <h6>🍰</h6>
                        <h3>Cake</h3>
                    </section>
                    <Toggle
                        size={1}
                        status={"on"}
                    />
                    <h6>USD</h6>
                </div>
            </section>
            <section className="inputbox1" >
                <input type="text" placeholder="0.0000 USD" />
                <h4>~ CAKE 0.000</h4>
            </section>
            <section className="options" >
                {
                    options.map(e => (
                        <h4 className="optionval" key={e}>${e}</h4>
                    ))
                }
            </section>
        </div>
    )
}
