import React, { useState } from "react";

const App = () => {
  const [tempVal, setTempVal] = useState(68);
  const [incTempIntervalId, setIncTempIntervalId] = useState(0)
  const [decTempIntervalId, setDecTempIntervalId] = useState(0)
  const [tempColor, setTempColor] = useState("cold")
  
  const increaseTemp = () => {
    console.log(tempVal)
    if(tempVal > 84){
      clearInterval(incTempIntervalId)
      return
    }
    if(tempVal > 77){
      setTempColor("hot")
    }
    setTempVal(tempVal + 1)
    setIncTempIntervalId(setInterval(() => {
      setTempVal(temp => {
        const newTemp = temp + 1
        if(newTemp > 84){
          return 85
        }
        if(newTemp > 77){
          setTempColor("hot")
        }
        return newTemp
      })
    }, 200));
  }

  const stopIncInterval = () => {
    clearInterval(incTempIntervalId)
  }

  const stopDecInterval = () => {
    clearInterval(decTempIntervalId)
  }

  const decreaseTemp = () => {
    console.log(tempVal)
    if(tempVal < 61){
      clearInterval(decTempIntervalId)
      return
    }
    if(tempVal < 78){
      setTempColor("cold")
    }
    setTempVal(tempVal - 1)
    setDecTempIntervalId(setInterval(() => {
      setTempVal(temp => {
        const newTemp = temp - 1
        if(newTemp < 61){
          return 60
        }
        if(newTemp < 78){
          setTempColor("cold")
        }
        return newTemp
      })
    }, 200));
  }

  return (
    <div className="app-container"
      onMouseUp={() => {
        stopIncInterval()
        stopDecInterval()
      }}
    >
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{tempVal}°F</div>
      </div>
      <div className="button-container">
        <button onMouseDown={() => increaseTemp()}>+</button>
        <button onMouseDown={() => decreaseTemp()}>-</button>
      </div>
    </div>
  )
}

export default App