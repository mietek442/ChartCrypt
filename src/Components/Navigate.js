import React from "react";
import "../Components/Navigate.css";
import hole from "../pictures/hole.png";
import inhole from "../pictures/inhole.png";
const ElementwithParams = (params) => {
  console.log(params.element.id);
  return (
    <div>
      to jest id: {params.element.id} to jest nazwisko:
      {params.element.lastname}

      
    </div>
  );
};

class Navigate extends React.Component {
  state = {
    elements: [
      { id: "andzrzej", name: "jan", lastname: "kowalski" },
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
      return e;
    });
    console.log("opc", opc);
    const elementswithparamsevrythhing = opc.map((e) => {
      return <ElementwithParams element={e} key={e} />;
    });
    console.log(elementswithparamsevrythhing);
    return (
      <div className="navigate">
        {elementswithparamsevrythhing}
        <div className="paralax-hole">
          jan paweł
          <img src={inhole} className="inhole" alt="srodek dziury" />
        </div>
      </div>
    );
  }
}
export default Navigate;
