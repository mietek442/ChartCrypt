import React from "react";
import "../Components/Navigate.css";
import hole from "../pictures/hole.png";
import inhole from "../pictures/inhole.png";

class Navigate extends React.Component {
  state = {
    elements: [
      { id: "papiez", name: "jan", lastname: "kowalski" },
      { id: "papiez", name: "kowalan", lastname: "kowalski" },
    ],
  };
  Pokaz(e) {
    //   console.log(...this.state.elements);
    console.log("dziala");
    console.log(this.state.elements[0].id);
  }

  render() {
    console.log(this.refundElements);
    console.log(this.state.elements);
    var opc = this.state.elements.map((e) => {
      return (
        <div>
          <div key={e.id}>{e.id}</div>
          <div key={e.name}>{e.name}</div>
        </div>
      );
    });
    console.log(opc);

    return (
      <div className="navigate">
        <div className="paralax-hole">
          <img src={hole} className="hole" alt="dziura" />
          <img src={inhole} className="inhole" alt="srodek dziury" />
        </div>
      </div>
    );
  }
}
export default Navigate;
