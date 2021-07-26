import React from "react"

export interface BMIFormProps {
  weight?: number
  heightFeet?: number
  heightInch?: number
  onWeightChange: (value: number) => void
  onHeightFeetChange: (value: number) => void
  onHeightInchChange: (value: number) => void
}

const BASE_CLASS = 'bmi-app__form';

const BMIForm: React.FC<BMIFormProps> = ({
  weight,
  heightFeet,
  heightInch,
  onWeightChange,
  onHeightFeetChange,
  onHeightInchChange,
}) => {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-header`}>
        <h1>BMI Calculator</h1>
        <p>Enter your weight and height below.</p>
      </div>
      <form className={`${BASE_CLASS}-body`}>
        <div className={`${BASE_CLASS}-group`}>
          <h2>Weight</h2>
          <div className={`${BASE_CLASS}-lb-input`}>
            <label className="control-label" htmlFor="bmiWeight">
              lb
            </label>
            <input
              className="form-control"
              id="bmiWeight"
              type="number"
              min="0"
              max="1000"
              value={weight || ''}
              onChange={(ev) => onWeightChange(Number(ev.target.value))}
            />
          </div>
        </div>

        <div className={`${BASE_CLASS}-group`}>
          <h2>Height</h2>
          <div className={`${BASE_CLASS}-ft-input`}>
            <label className="control-label" htmlFor="bmiHeightFeet">
              ft
            </label>
            <input
              className="form-control"
              id="bmiHeightFeet"
              type="number"
              min="1"
              max="12"
              value={heightFeet || ''}
              onChange={(ev) => onHeightFeetChange(Number(ev.target.value))}
            />
          </div>
          <div className={`${BASE_CLASS}-in-input`}>
            <label className="control-label" htmlFor="bmiHeightInch">
              in
            </label>
            <input
              className="form-control"
              id="bmiHeightInch"
              type="number"
              min="0"
              max="12"
              value={heightInch || ''}
              onChange={(ev) => onHeightInchChange(Number(ev.target.value))}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default BMIForm
