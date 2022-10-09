import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(68);
  const [increaseTempIntervalId, setIncreaseTempIntervalId] = useState(0)
  const [decreaseTempIntervalId, setDecreaseTempIntervalId] = useState(0)
  const [temperatureColor, setTemperatureColor] = useState("cold")
  
  const increaseTemperature = () => {
    console.log(temperatureValue)
    if(temperatureValue > 84){
      clearInterval(increaseTempIntervalId)
      return
    }
    if(temperatureValue > 77){
      setTemperatureColor("hot")
    }
    setTemperatureValue(temperatureValue + 1)
    setIncreaseTempIntervalId(setInterval(() => {
      setTemperatureValue(temperature => {
        const newTemperature = temperature + 1
        if(newTemperature > 84){
          return 85
        }
        if(newTemperature > 77){
          setTemperatureColor("hot")
        }
        return newTemperature
      })
    }, 200));
  }

  const stopIncreaseInterval = () => {
    clearInterval(increaseTempIntervalId)
  }

  const stopDecreaseInterval = () => {
    clearInterval(decreaseTempIntervalId)
  }

  const decreaseTemperature = () => {
    console.log(temperatureValue)
    if(temperatureValue < 61){
      clearInterval(decreaseTempIntervalId)
      return
    }
    if(temperatureValue < 78){
      setTemperatureColor("cold")
    }
    setTemperatureValue(temperatureValue - 1)
    setDecreaseTempIntervalId(setInterval(() => {
      setTemperatureValue(temperature => {
        const newTemperature = temperature - 1
        if(newTemperature < 61){
          return 60
        }
        if(newTemperature < 78){
          setTemperatureColor("cold")
        }
        return newTemperature
      })
    }, 200));
  }

  return (
    <div className="app-container"
      onMouseUp={() => {
        stopIncreaseInterval()
        stopDecreaseInterval()
      }}
    >
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°F</div>
      </div>
      <div className="button-container">
        <button onMouseDown={() => increaseTemperature()}>+</button>
        <button onMouseDown={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App