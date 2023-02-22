import React, { useState } from "react";
import cardLogo from "./assets/images/card-logo.svg";

function App() {
  const [cardDetails, setCardDetails] = useState({
    name: "jane appleseed",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "00",
    cvc: "123",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCardDetails((prevCardDetails) => ({
      ...prevCardDetails,
      [name]:
        name === "cardNumber"
          ? value.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ")
          : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="main">
        <div className="card-preview">
          <div className="card card-back">
            <p className="card-cvc">{cardDetails.cvc}</p>
          </div>

          <div className="card card-front">
            <img src={cardLogo} alt="" className="card-logo" />
            <p className="card-number">{cardDetails.cardNumber}</p>

            <div className="flex">
              <p className="card-holder-name">{cardDetails.name}</p>
              <p className="card-expiry-date">
                {cardDetails.expMonth}/{cardDetails.expYear}
              </p>
            </div>
          </div>
        </div>

        <div className="card-form">
          <form onSubmit={handleSubmit} id="card-details-form" className="form">
            <label htmlFor="name">Cardholder Name</label>
            <input
              type="text"
              name="name"
              id="name"
              // value={cardDetails.name}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
            />

            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              // value={cardDetails.cardNumber}
              onChange={handleChange}
              placeholder="e.g. 1234 5678 9123 0000"
              maxLength={16}
            />

            <div className="form-control">
              <div>
                <label htmlFor="expDate">Exp. Date (MM/YY)</label>
                <div className="form-control">
                  <input
                    type="text"
                    name="expMonth"
                    id="expMonth"
                    // value={cardDetails.expMonth}
                    onChange={handleChange}
                    placeholder="MM"
                    maxLength={2}
                  />
                  <input
                    type="text"
                    name="expYear"
                    id="expYear"
                    // value={cardDetails.expYear}
                    onChange={handleChange}
                    placeholder="YY"
                    maxLength={2}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cardNumber">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  // value={cardDetails.cvc}
                  onChange={handleChange}
                  placeholder="e.g. 123"
                  maxLength={3}
                />
              </div>
            </div>

            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
