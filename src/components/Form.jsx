import React from "react";

function Form(props) {
  return (
    <>
      <div className="card-form">
        <form
          onSubmit={props.handleSubmit}
          id="card-details-form"
          className="form"
        >
          <label htmlFor="name">Cardholder Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={props.handleChange}
            placeholder="e.g. Jane Appleseed"
          />

          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            onChange={props.handleChange}
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
                  onChange={props.handleChange}
                  placeholder="MM"
                  maxLength={2}
                />
                <input
                  type="text"
                  name="expYear"
                  id="expYear"
                  onChange={props.handleChange}
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
                onChange={props.handleChange}
                placeholder="e.g. 123"
                maxLength={3}
              />
            </div>
          </div>

          <button className="btn" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
