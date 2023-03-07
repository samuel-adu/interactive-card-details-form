import React from "react";
import completeIcon from "./assets/images/icon-complete.svg";
import cardLogo from "./assets/images/card-logo.svg";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardHolderName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
  });

  function onSubmit() {
    document.getElementById("main-content").innerHTML = `
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
        <div className="card-preview">
          <div className="card card-back">
            <p className="card-cvc">{watch("cvc") || "000"}</p>
          </div>

          <div className="card card-front">
            <img src={cardLogo} alt="" className="card-logo" />
            <p className="card-number">
              {watch("cardNumber")
                .toString()
                .replace(/\B(?=(\d{4})+(?!\d))/g, " ") || "0000 0000 0000 0000"}
            </p>

            <div className="flex">
              <p className="card-holder-name">
                {watch("cardHolderName") || "John Appleseed"}
              </p>
              <p className="card-expiry-date">
                {watch("expMonth") || "00"}/{watch("expYear") || "00"}
              </p>
            </div>
          </div>
        </div>

        <main id="main-content">
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="card-details-form"
            className="form"
          >
            <div className="form-control">
              <label className="form-label" htmlFor="cardHolderName">
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardHolderName"
                placeholder="e.g. Jane Appleseed"
                {...register("cardHolderName", { required: "can't be blank" })}
              />
              {errors.cardHolderName && (
                <p className="error-msg">{errors.cardHolderName.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="form-label" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={16}
                {...register("cardNumber", {
                  required: "can't be blank",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "wrong format, numbers only",
                  },
                  minLength: {
                    value: 16,
                    message: "16 digits required",
                  },
                })}
              />
              {errors.cardNumber && (
                <p className="error-msg">{errors.cardNumber.message}</p>
              )}
            </div>

            <div className="flex">
              <div className="form-control">
                <label className="form-label">Exp. Date (MM/YY)</label>
                <div className="flex">
                  <input
                    type="text"
                    id="expMonth"
                    placeholder="MM"
                    maxLength={2}
                    {...register("expMonth", {
                      required: "can't be blank",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "numbers only",
                      },
                      minLength: {
                        value: 2,
                        message: "2 digits required",
                      },
                    })}
                  />
                  <input
                    type="text"
                    id="expYear"
                    placeholder="YY"
                    maxLength={2}
                    {...register("expYear", {
                      required: "can't be blank",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "numbers only",
                      },
                      minLength: {
                        value: 2,
                        message: "2 digits required",
                      },
                    })}
                  />
                </div>
                {errors.expMonth ? (
                  <p className="error-msg">{errors.expMonth.message}</p>
                ) : errors.expYear ? (
                  <p className="error-msg">{errors.expYear.message}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="cvc">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="e.g. 123"
                  maxLength={3}
                  {...register("cvc", {
                    required: "can't be blank",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "numbers only",
                    },
                    minLength: {
                      value: 3,
                      message: "3 digits required",
                    },
                  })}
                />
                {errors.cvc && (
                  <p className="error-msg">{errors.cvc.message}</p>
                )}
              </div>
            </div>

            <button className="btn" type="submit">
              Confirm
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default App;
