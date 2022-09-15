import "./styles.css";
import React, { useState } from "react";

export default function App() {

  const [userInput, setUserInput] = useState(0);
  const [unit, setUnit] = useState('c')

  const label = unit === 'c'
    ? 'Celsius to Fahrenheit'
    : 'Fahrenheit to Celsius'

  const celsius = getTemperature({value: userInput, from: unit, to: 'c'})
  const fahrenheit = getTemperature({value: userInput, from: unit, to: 'f'})

  function getTemperature({value, from, to }) {
    let temperature = Number(value);
    if (from !== to) {
      if (to === 'f') {
        temperature = (temperature * 9/5) + 32
      } else {
        temperature = (temperature - 32) * 5/9
      }
    }
    return temperature.toFixed(2).toString();
  }

  return (
    <div className="App">
      <div className="card">
        <header className='card-header'>
        <label className="text-color"> Ingrese el valor a convertir:</label>
        </header>
        <section className="selector">
          <input
            type="number"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value)
            }}
          />
          <select
            name="temperature"
            id="selector"
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="c">C</option>
            <option value="f">F</option>
          </select>
        </section>
        <section>
          {label}
        </section>
        <section>
          <div>
            <span>Celsius: {celsius} </span>
          </div>
          <div>
            <span>Fahrenheit: {fahrenheit}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
