import React from "react";
import Card from "./Card";
let Funcomp = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>LULU -Al Ghubra</h1>
        <img src="lulu.jpg" alt="Error on load"></img>
        <h5 style={{ color: "red" }}>
          Country :{props.name} <br></br>
          Location:{props.location}
          <br></br>
          City:{props.city}
          <br></br>
          Mall-name:{props.mallname}
        </h5>
      </div>
      <Card country="Oman" city="Muscat" location="Alkuwaire"></Card>
    </React.Fragment>
  );
};
export default Funcomp;
