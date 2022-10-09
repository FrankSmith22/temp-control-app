import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(68);
  const [temperatureColor, setTemperatureColor] = useState("cold")

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1
    if(newTemperature > 85) return
    if(newTemperature > 77){
      setTemperatureColor("hot")
    }
    setTemperatureValue(newTemperature)
  }

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1
    if(newTemperature < 60) return
    if(newTemperature < 78){
      setTemperatureColor("cold")
    }
    setTemperatureValue(newTemperature)
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°F</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App