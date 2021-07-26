import React, { useEffect, useState } from "react"

export interface BMIDisplayProps {
  bmi?: number
}

const BASE_CLASS = "bmi-app__display"

const BMIDisplay: React.FC<BMIDisplayProps> = ({ bmi }) => {
  const [alertClass, setAlertClass] = useState<string>("")
  const [bmiLabel, setBmiLabel] = useState<string>()

  const getBMIResults = (bmi?: number) => {
    let label = ""
    if (bmi === undefined) {
      setAlertClass("")
      return label
    }
    if (bmi <= 18.5) {
      label = "Underweight"
      setAlertClass(`${BASE_CLASS}--danger`)
    } else if (bmi <= 24.9) {
      label = "Normal weight"
      setAlertClass(`${BASE_CLASS}--success`)
    } else if (bmi <= 29.9) {
      label = "Overweight"
      setAlertClass(`${BASE_CLASS}--warning`)
    } else if (bmi >= 30) {
      label = "Obesity"
      setAlertClass(`${BASE_CLASS}--danger`)
    }
    return label
  }

  useEffect(() => {
    setBmiLabel(getBMIResults(bmi))
  }, [bmi])

  return (
    <div className={`${BASE_CLASS} ${alertClass}`}>
      <div>{bmi}</div>
      <div>{bmiLabel}</div>
    </div>
  )
}

export default BMIDisplay
