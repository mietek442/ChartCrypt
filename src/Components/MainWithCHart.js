import React from "react";
import "./MainWithCHart.css";
import Chart from "./Chart";

function MainWithCHart({
  FirstSettingsParametrs,
  SecondSettingsParametrs,
  ThirdSettingsParametrs,
  FourthSettingsParametrs,
  FifthSettingsParametrs,
}) {
  return (
    <div className="MainWithPanel" id="adam">
      <Chart
        FirstSettingsParametrs={FirstSettingsParametrs}
        SecondSettingsParametrs={SecondSettingsParametrs}
        ThirdSettingsParametrs={ThirdSettingsParametrs}
        FourthSettingsParametrs={FourthSettingsParametrs}
        FifthSettingsParametrs={FifthSettingsParametrs}
      />
    </div>
  );
}

export default MainWithCHart;
