import React from "react";
import "./SettingsPanel.css";
const taboptionSelectedCrypto = {
  bitcon: {
    name: "Bitcoin",
    symbol: "bitcoin",
  },
  etherium: {
    name: "Etherium",
    symbol: "etherium",
  },
};
const taboptionTimes = {
  tenHours: {
    name: "10 godzin",
    symbol: "bitcoin",
    howcan: ["daily", "5-minutely"],
  },
};

function SettingsPanel({ chooseMessage }) {
  function FunctionClose() {
    chooseMessage(false);
  }

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
          <select>
            <option>label</option>
          </select>
          <select>
            <option>label</option>
          </select>
          <select>
            <option>label</option>
          </select>
          <select>
            <option>label</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
