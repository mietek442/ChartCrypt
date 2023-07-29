import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import "./SettingsPanel.css";
// style of select
const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#212529" : "#fff",
    backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
  }),
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "10px",
      height: "0px",
      border: "1px solid black",
    },
    "::-webkit-scrollbar-track": {
      background: "#212529",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#887",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#212529",
    padding: "15px",
    width: "100%",
    margin: 0,
    justifyContent: "center",
    border: "none",
    boxShadow: "none",
  }),

  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};

var tabDays = [];
for (let x = 1; x <= 365; x++) {
  // wybór liczby dni
  tabDays.push(x);
}
// first option
const optionsfirstoption = [
  { value: "bitcoin", label: "Bitcoin" },
  { value: "ethereum", label: "Ethereum" },
  { value: "dogecoin", label: "DogeCoin" },
];
// second option
const optionDaysMany = tabDays.map((e) => {
  return { value: e, label: e + " dni " };
});
// fourth option
const optionfourthdoption = [
  { value: [1.001, "none"], label: "Z wykresu plus po 0,1%" },
  { value: [1.01, "none"], label: "Z wykresu plus po 1%" },
  { value: [1.01, 10], label: "ostatnie 30dni plus po 1%" },
  { value: [1.01, 90], label: "ostatnie 90dni plus po 1%" },
  { value: [1.01, 180], label: "ostatnie 180dni plus po 1%" },
  { value: [1.01, 365], label: "ostatnie 365dni plus po 1%" },
  { value: [1.01, 729], label: "ostatnie 730dni plus po 1%" },
];
const optionfifthdoption = [
  { value: [1, "EUR"], label: "Euro" },
  { value: [2, "USD"], label: "Dolar" },
  { value: [3, "USD"], label: "Polski Złoty" },
];

function SettingsPanel({
  chooseMessage,
  choosePanelParametersFirst,
  choosePanelParametersSecond,
  choosePanelParametersThird,
  choosePanelParametersFourth,
  choosePanelParametersfifth,
}) {
  // const threeSelectRef = useRef < HTMLInputElement > null;
  function FunctionClose() {
    chooseMessage(false);
  }

  // choosePanelParameters("adam");
  // first
  const [selectedfirst, setSelectedfirst] = useState(null);

  const handleChangefirst = (selectedOption) => {
    setSelectedfirst(selectedOption);
    choosePanelParametersFirst(selectedOption?.value);
  };
  //third

  const [selectedthree, setSelectedthree] = useState(null);
  if (selectedthree) {
    // setvaluselectthird({ value: "hourly", label: "Godzinne" });
  }
  const handleChangethree = (selectedOption) => {
    choosePanelParametersThird(selectedOption?.value);
    setSelectedthree(selectedOption);
    setValue2(selectedOption);
  };

  //second
  const [selectedtwo, setSelectedtwo] = useState(null);
  const [value2, setValue2] = useState();

  const [optionthree, setoptionthree] = useState({
    value: [
      { value: "hourly", label: "Godzinne" },
      { value: "daily", label: "Dzienne" },
    ],
  });

  const handleChangetwo = (selectedOption) => {
    setSelectedtwo(selectedOption);
    choosePanelParametersSecond(selectedOption?.value);

    var toChangeoption = {};
    if (selectedOption.value == 1) {
      toChangeoption = {
        value: [
          { value: "hourly", label: "Godzinne" },
          { value: "daily", label: "Dzienne" },
          { value: "5-minutely", label: "Co 5 minut" },
        ],
      };
    } else if (selectedOption.value < 90 && selectedOption.value != 1) {
      if (selectedOption.value < 90 && selectedOption.value != 1) {
        toChangeoption = {
          value: [
            { value: "hourly", label: "Godzinne" },
            { value: "daily", label: "Dzienne" },
          ],
        };

        if (selectedthree?.value == "5-minutely") {
          setValue2({ value: "hourly", label: "Godzinne" });
          choosePanelParametersThird("hourly");
        }
      }
    } else {
      toChangeoption = {
        value: [{ value: "daily", label: "Dzienne" }],
      };

      setValue2({ value: "daily", label: "Dzienne" });
      choosePanelParametersThird("daily");
    }
    setoptionthree((optionthree) => ({
      ...optionthree,
      ...toChangeoption,
    }));
  };

  //fourth
  const [selectedfour, setSelectedfour] = useState(null);
  if (selectedfour) {
  }
  const handleChangefour = (selectedOption) => {
    setSelectedtwo(selectedOption);
    choosePanelParametersFourth(selectedOption?.value);
  };
  //fifth
  const [selectedfifth, setSelectedfifth] = useState(null);
  if (selectedfifth) {
  }
  const handleChangefifth = (selectedOption) => {
    setSelectedtwo(selectedOption);
    choosePanelParametersfifth(selectedOption?.value);
  };

  return (
    <div>
      <div className="test-scss">
        <div className="setting-navigate">
          <div className="close-button-div">
            <input
              type="checkbox"
              className="check-close-button"
              onClick={FunctionClose}
            />
            <div className="line-close"></div>
            <div className="line-close"></div>
          </div>
        </div>
        <div className="selected-div">
          <Select
            styles={customStyles}
            options={optionsfirstoption}
            onChange={handleChangefirst}
            placeholder={<div>Wybór Kryptowaluty</div>}
            autoFocus={false}
            maxMenuHeight={250}
            menuPlacement="bottom"
          />
          <Select
            styles={customStyles}
            options={optionDaysMany}
            onChange={handleChangetwo}
            autoFocus={false}
            placeholder={<div>Okres Wykresu</div>}
            maxMenuHeight={250}
            menuPlacement="bottom"
          />
          <Select
            styles={customStyles}
            options={optionthree.value}
            onChange={handleChangethree}
            placeholder={<div>Częstotliwość Wykresu</div>}
            value={value2}
            autoFocus={false}
            maxMenuHeight={250}
            menuPlacement="top"
          />
          <Select
            styles={customStyles}
            options={optionfourthdoption}
            placeholder={<div>Skala Wykresu</div>}
            onChange={handleChangefour}
            autoFocus={false}
            maxMenuHeight={250}
            menuPlacement="top"
          />
          <Select
            styles={customStyles}
            options={optionfifthdoption}
            placeholder={<div>Waluta</div>}
            onChange={handleChangefifth}
            autoFocus={false}
            maxMenuHeight={250}
            menuPlacement="top"
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
