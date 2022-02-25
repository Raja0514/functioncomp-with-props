import React from "react";
import Funcomp from "./Funcom";
let App = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Al Sadi-Qurum-Oman</h1>
        <img src="qurum.jpg" alt="Error on load"></img>
        <h5>
          Country :{props.name} <br></br>
          Location:{props.location}
          <br></br>
          City:{props.city}
          <br></br>
          Mall-name:{props.mallname}
        </h5>
      </div>
      <Funcomp
        name="Oman"
        location="Qurum"
        city="ruwi"
        mallname="carefour"
      ></Funcomp>
    </React.Fragment>
  );
};
export default App;
