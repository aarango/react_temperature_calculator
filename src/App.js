import "./styles.css";
import React, { useState } from "react";

const initialState = [
  {
    value: 0,
    type: "C"
  },
  {
    value: 0,
    type: "F"
  }
];
export default function App() {
  const [selected, setSelected] = useState(initialState[0].type);
  const [temperature, setUpdateTemperature] = useState(initialState);

  const updateC = (ev) =>
    setUpdateTemperature([
      {
        value: ev.target.value,
        type: "C"
      },
      {
        value: ((+ev.target.value * 9) / 5 + 32).toFixed(2),
        type: "F"
      }
    ]);

  const updateF = (ev) =>
    setUpdateTemperature([
      {
        value: (((+ev.target.value - 32) * 5) / 9).toFixed(2),
        type: "C"
      },
      {
        value: ev.target.value,
        type: "F"
      }
    ]);

  const handleChangeDropDown = (value) => {
    setSelected(value);
  };

  const handleChangeInput = (event) => {
    if (selected === "C") {
      updateC(event);
    } else {
      updateF(event);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <header className='card-header'>
        <label className="text-color"> Ingrese el valor a convertir:</label>
        </header>
        <section className="selector">
          <input
            type="text"
            id="name"
            name="name"
            required
            size="10"
            onChange={handleChangeInput}
          />
          <select
            name="temperature"
            id="selector"
            onChange={(event) => handleChangeDropDown(event.target.value)}
          >
            {temperature.map(({ type }, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </section>
        <section>
          {" "}
          <label>
            {" "}
            {selected === "C"
              ? `Grados ${selected} --> F`
              : `Grados ${selected} --> C `}
          </label>
        </section>
        <section>
          <div id="box1">
            <h1>Celsius</h1>
            <input
              type="number"
              value={temperature[0].value}
              onChange={updateC}
            />
          </div>
          <div id="box2">
            <h1>Fahrenheit</h1>
            <input
              type="number"
              value={temperature[1].value}
              onChange={updateF}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
