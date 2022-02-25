import React from "react";
import Card3 from "./Card3";
let Card2 = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>SAMA HYPERMARKET</h1>
        <img src="rt1.jpg" alt="error on load"></img>
        <h5>
          Name:{props.name}
          <br></br>
          City:{props.city}
          <br></br>
          Location:{props.location}
        </h5>
      </div>
      <Card3 name="Oman" city="Muscat" location="Ghala"></Card3>
    </React.Fragment>
  );
};
export default Card2;
