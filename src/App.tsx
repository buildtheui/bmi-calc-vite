import React, { useState } from "react"
import "./App.css"

import BMIDisplay from "./components/BMIDisplay"
import BMIForm from "./components/BMIForm"

declare global {
  interface Window {
    electron: any
  }
}

function App() {
  const [weight, setWeight] = useState<number>()
  const [heightFeet, setHeightFeet] = useState<number>()
  const [heightInch, setHeightInch] = useState<number>()

  const calculateBMI = (
    weight?: number,
    heightFeet?: number,
    heightInch?: number
  ) => {
    if (weight && heightFeet && heightInch) {
      // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
      let INCHES_IN_FEET = 12

      let height = Number(heightFeet)
      // convert feet to inches
      height *= INCHES_IN_FEET
      // add the inches input field
      height += Number(heightInch)

      let bmi = (weight / (height * height)) * 703

      return Number(bmi.toFixed(2))
    }
  }

  return (
    <div className="bmi-app">
      <BMIForm
        weight={weight}
        heightFeet={heightFeet}
        heightInch={heightInch}
        onWeightChange={setWeight}
        onHeightFeetChange={setHeightFeet}
        onHeightInchChange={setHeightInch}
      />
      <BMIDisplay bmi={calculateBMI(weight, heightFeet, heightInch)} />
    </div>
  )
}

export default App
