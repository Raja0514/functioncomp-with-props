import React from "react";
import Card1 from "./Card1";
let Card = (props) => {
  return (
    <div>
      <h1>Globus-HyperMarket</h1>
      <img src="gm.jpg" alt="Error on load"></img>
      <h5>
        Name:{props.country}
        <br></br>
        City:{props.city}
        <br></br>
        Location:{props.location}
      </h5>
      <Card1 name="Oman" city="Muscat" location="Sur"></Card1>
    </div>
  );
};
export default Card;
