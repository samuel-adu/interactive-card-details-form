import React, { useState } from "react";
import completeIcon from "./assets/images/icon-complete.svg";
import Preview from "./components/Preview";
import Form from "./components/Form";

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
    document.querySelector(".card-form").innerHTML = `
    <div class="complete-state">
      <img src=${completeIcon} alt="" class="complete-icon"/>
      <h2 class="complete-heading">thank you!</h2>
      <p class="complete-msg">we've added your card details</p>
      <button class="btn continue-btn">continue</button>
    </div>`;
  }

  return (
    <>
      <div className="main">
        <Preview cardDetails={cardDetails} />
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default App;
