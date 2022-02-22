import React from "react";
import Card from "./Card";
let Funcomp = (props) => {
  return (
    <div>
      <h1>LULU -Al Ghubra</h1>
      <img src="lulu.jpg"></img>
      <h5 style={{ color: "red" }}>
        Country :{props.name} <br></br>
        Loaction:{props.location}
        <br></br>
        City:{props.city}
        <br></br>
        MallName:{props.mallname}
      </h5>
      <Card country="Oman" city="Muscat" location="Alkuwaire"></Card>
    </div>
  );
};
export default Funcomp;
