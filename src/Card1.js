import React from "react";
import Card2 from "./Card2";
let Card1 = (props) => {
  return (
    <div>
      <h1>Retail Busness of LULU</h1>
      <img src="rt.jpg" alt="Error load"></img>
      <h5>
        Name:{props.name}
        <br></br>
        City: {props.city}
        <br></br>
        Location:{props.location}
      </h5>
      <Card2 name="muscat" city="Alkuwaire" location="Mawalaa"></Card2>
    </div>
  );
};
export default Card1;
