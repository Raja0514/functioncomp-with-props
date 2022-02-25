import React from "react";
import Card2 from "./Card2";
let Card1 = (props) => {
  return (
    <React.Fragment>
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
      </div>
      <Card2 name="muscat" city="Alkuwaire" location="Mawalaa"></Card2>
    </React.Fragment>
  );
};
export default Card1;
