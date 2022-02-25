import React from "react";
import Card4 from "./Card4";
let Card3 = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Friday Muscat</h1>
        <img src="rt3.jpg" alt="error on load"></img>
        <h5>
          Name:{props.name}
          <br></br>
          City:{props.city}
          <br></br>
          Location:{props.location}
        </h5>
      </div>
      <Card4 name="Oman" city="Muscat" location="Rusayl"></Card4>
    </React.Fragment>
  );
};
export default Card3;
