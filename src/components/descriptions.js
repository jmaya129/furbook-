import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Real Cats</h5>
          <p className="sub-text">
            Contrary to popular belief, cats aren't loners. 
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Dogs</h5>
          <p className="sub-text">
            Dogs are man's best friend. But dogs can also be dog's best friend.
           
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Friends</h5>
          <p className="sub-text">
             Who says cats and dogs can't get along? {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
