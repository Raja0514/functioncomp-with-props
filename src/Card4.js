import React from "react";
let Card4 = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>LULU Owner with Sponser</h1>
        <img src="rt2.jpg" alt="error on load"></img>
        <h5>
          Name:{props.name}
          <br></br>
          City:{props.city}
          <br></br>
          Location:{props.location}
        </h5>
      </div>
    </React.Fragment>
  );
};
export default Card4;
