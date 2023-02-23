import React from "react";
import cardLogo from "../assets/images/card-logo.svg";

function Preview(props) {
  return (
    <>
      <div className="card-preview">
        <div className="card card-back">
          <p className="card-cvc">{props.cardDetails.cvc}</p>
        </div>

        <div className="card card-front">
          <img src={cardLogo} alt="" className="card-logo" />
          <p className="card-number">{props.cardDetails.cardNumber}</p>

          <div className="flex">
            <p className="card-holder-name">{props.cardDetails.name}</p>
            <p className="card-expiry-date">
              {props.cardDetails.expMonth}/{props.cardDetails.expYear}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
