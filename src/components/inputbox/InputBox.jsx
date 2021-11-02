import React from 'react'
import "./inputbox.css"
import Toggle from '../toggle/Toggle'

export default function InputBox() {
    const options = ["1000", "100"]

    return (
        <div className="inputboxbody" >
            <section className="a" >
                <h4>ROI at Current Rates</h4>
            </section>
            <section className="inputbox1" >
                <input type="text" placeholder="0.0000 USD" />
            </section>
            <section className="inputboxfooter" >
                <h4>
                    ~0.0000 CAKE + 0.000000 DON
                </h4>
            </section>
        </div>
    )
}
