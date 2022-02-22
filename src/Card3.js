import React from "react";
import Card4 from "./Card4";
let Card3 = (props) => {
  return (
    <div>
      <h1>Friday Muscat</h1>
      <img src="rt3.jpg"></img>
      <h5>
        Name:{props.name}
        <br></br>
        City:{props.city}
        <br></br>
        Location:{props.location}
      </h5>
      <Card4 name="Oman" city="Muscat" location="Rusayl"></Card4>
    </div>
  );
};
export default Card3;
