import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import LogoBlack from "../pictures/LogoChartCryptoV1-black.png";
import "./Navigate.css";

function Navigate({ chooseMessage, closeStatus }) {
  console.log(closeStatus);
  function CheckViewLeftPanel() {
    console.log("dd");
    var checkButton = document.querySelector(".gear-checkbox");
    if (checkButton.checked) {
      chooseMessage(true);
    }
  }
  if (closeStatus === false) {
    var checkButton = document.querySelector(".gear-checkbox");
    checkButton.checked = false;
  }
  return (
    <div>
      <div className="navigate">
        <div className="setting">
          <input
            className="gear-checkbox"
            type="checkbox"
            onClick={CheckViewLeftPanel}
          />
          <FontAwesomeIcon className="gear-one" icon={faGear} rotation={0} />
          <FontAwesomeIcon className="gear-two" icon={faGear} rotation={0} />
        </div>
        <div className="logodiv">
          <img src={LogoBlack} alt="Logo" className="logo" />
          <p>ChartCrypt</p>
        </div>
        <div className="change-color-theme">
          <input
            className="checkbox-change-color"
            type="checkbox"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 20,
              opacity: 0,
            }}
          />
          <div className="sunpoint">
            <div className="circlesun" style={{ boxShadow: "none !important" }}>
              <div className="shadows"></div>
            </div>
            <div className="liness"></div>
            <div className="liness"></div>
            <div className="liness"></div>
            <div className="liness"></div>
            <div className="liness"></div>
            <div className="liness"></div>
            <div className="liness"></div>
            <div className="liness"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigate;
