import React, { useState } from 'react'
import "./app.css"
import ROIcalculator from './components/ROImain/ROIcalculator'
export default function App() {
    const [isOn, toggle] = useState(false)
    const toggler = () => toggle(true)
    return (
        <ROIcalculator />
    )
}
