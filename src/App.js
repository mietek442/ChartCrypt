import "./App.css";

import Navigate from "./Components/Navigate";
import { useState } from "react";
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
  } else {
    var SettingsDisplayStyle = { display: "none" };
  }

  // odbieanie parametrów z Setting  Panel. js
  const [PanelParametersFirst, setPanelParametersFirst] = useState(null);
  const choosePanelParametersFirst = (PanelParametersFirst) => {
    setPanelParametersFirst({ PanelParametersFirst: PanelParametersFirst });
  };
  console.log(PanelParametersFirst?.PanelParametersFirst);
  const [PanelParametersSecond, setPanelParametersSecond] = useState(null);
  const choosePanelParametersSecond = (PanelParametersSecond) => {
    setPanelParametersSecond({ PanelParametersSecond: PanelParametersSecond });
  };
  console.log(PanelParametersSecond?.PanelParametersSecond);
  const [PanelParametersThird, setPanelParametersThird] = useState(null);
  const choosePanelParametersThird = (PanelParametersThird) => {
    setPanelParametersThird({ PanelParametersThird: PanelParametersThird });
  };
  console.log(PanelParametersThird?.PanelParametersThird);
  const [PanelParametersFourth, setPanelParametersFourth] = useState(null);
  const choosePanelParametersFourth = (PanelParametersFourth) => {
    setPanelParametersFourth({ PanelParametersFourth: PanelParametersFourth });
  };
  console.log(PanelParametersFourth?.PanelParametersFourth);
  const [PanelParametersfifth, setPanelParametersfifth] = useState(null);
  const choosePanelParametersfifth = (PanelParametersfifth) => {
    setPanelParametersfifth({ PanelParametersfifth: PanelParametersfifth });
  };
  console.log(PanelParametersfifth?.PanelParametersfifth);

  return (
    <div className="App">
      <Navigate chooseMessage={chooseMessage} closeStatus={message} />
      <div className="divers" style={SettingsDisplayStyle}>
        <SettingsPanel
          chooseMessage={chooseMessage}
          choosePanelParametersFirst={choosePanelParametersFirst}
          choosePanelParametersSecond={choosePanelParametersSecond}
          choosePanelParametersThird={choosePanelParametersThird}
          choosePanelParametersFourth={choosePanelParametersFourth}
          choosePanelParametersfifth={choosePanelParametersfifth}
        />
      </div>
      <MainWithCHart
        FirstSettingsParametrs={PanelParametersFirst?.PanelParametersFirst}
        SecondSettingsParametrs={PanelParametersSecond?.PanelParametersSecond}
        ThirdSettingsParametrs={PanelParametersThird?.PanelParametersThird}
        FourthSettingsParametrs={PanelParametersFourth?.PanelParametersFourth}
        FifthSettingsParametrs={PanelParametersfifth?.PanelParametersfifth}
      />
    </div>
  );
}

export default App;
