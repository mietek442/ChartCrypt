import "./App.css";

import Navigate from "./Components/Navigate";
import SettingsPanel from "./Components/SettingsPanel.js";
import MainWithCHart from "./Components/MainWithCHart";
import React, { PureComponent } from "react";

function App() {
  const [{ message }, setMessage] = React.useState(
    "send a function to navigate"
  );
  const chooseMessage = (message) => {
    setMessage({ message: message });
  };

  // setMessage({ closeDiv: "mietek" });

  var SettingsDisplayStyle = { display: "none" };
  if (message == true) {
    var SettingsDisplayStyle = { display: "block" };
    console.log("warunek");
  } else {
    var SettingsDisplayStyle = { display: "none" };
  }
  var cos = "cos";
  // if (message) {
  //   SettingDiv.style.display = "block";
  // } else {
  //   SettingDiv.style.display = "none";
  // }

  return (
    <div className="App">
      <Navigate chooseMessage={chooseMessage} closeStatus={message} />
      <div className="divers" style={SettingsDisplayStyle}>
        <SettingsPanel chooseMessage={chooseMessage} />
      </div>
      <MainWithCHart />
    </div>
  );
}

export default App;
