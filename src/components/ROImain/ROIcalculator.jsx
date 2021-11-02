
import React from 'react'
import "./calculator.css"
import Maininput from '../maininput/Maininput'
import close from "./close.png"
import Timeframe from '../timeframe/Timeframe'
import AccelerateAPY from '../acceleratedAPY/AcceleratedAPY'
import InputBox from '../inputbox/InputBox'
import Details from '../details/Details'

export default function ROIcalculator() {
    return (
        <div className="calculatorbody">
            <div className="calcin" >
                <header>
                    <section className="headersection" >
                        <h1>
                            ROI Calculator
                        </h1>
                        <img src={close} alt="" />
                    </section>
                </header>
                <Maininput />
                <br />
                <Timeframe />
                <br />
                <AccelerateAPY />
                <br />
                <InputBox />
                <br />
                <Details />
            </div>
        </div>
    )
}
