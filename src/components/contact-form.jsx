import React, { useState, useEffect, useRef } from "react";
import {
  submitForm,
  validatePhoneNumber,
  debounce,
  validateEmail,
} from "../utils";

const Form = () => {
  const [contactFormData, setContactFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderCompany: "",
    senderPhone: "",
    senderMessage: "",
  });

  const [formStatus, updateFormStatus] = useState({
    loading: false,
    submitted: false,
  });

  const [isValidPhone, setPhoneValidity] = useState(true);
  const [isValidEmail, setEmailValidity] = useState(true);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.log("Effect was run");
    console.log(formStatus);
  }, [formStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidPhone) {
      updateFormStatus({ ...formStatus, loading: true });

      async function fetchFormResponse() {
        let [shouldStillLoad, isFormSubmitted] = await submitForm(
          contactFormData
        );

        updateFormStatus({
          loading: shouldStillLoad,
          submitted: isFormSubmitted,
        });
        setTimeout(() => updateFormStatus({ submitted: false }), 4000);
      }
      fetchFormResponse();

      setContactFormData({
        senderName: "",
        senderEmail: "",
        senderCompany: "",
        senderPhone: "",
        senderMessage: "",
      });
    } else {
      alert("Please enter a valid phone number!");
      document.querySelector("#phone-input").focus();
    }
  };

  const handleOnChange = (e, inputType) => {
    if (e.target.value) {
      setContactFormData({ ...contactFormData, [inputType]: e.target.value });

      if (inputType === "senderPhone") {
        debounce(setPhoneValidity(validatePhoneNumber(e.target.value)), 1000);
      }
      if (inputType === "senderEmail") {
        debounce(setEmailValidity(validateEmail(e.target.value)), 1000);
      }
    } else {
      setContactFormData({ ...contactFormData, [inputType]: "" });

      if (inputType === "senderPhone") {
        setPhoneValidity(true);
      }
    }
  };

  const { senderName, senderEmail, senderCompany, senderPhone, senderMessage } =
    contactFormData;
  const { loading, submitted } = formStatus;
  const loadingModal = loading && (
    <div id="form-sending">
      <h1>Sending...</h1>
    </div>
  );

  return (
    <form id="form-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <h3> Fill out the form </h3>
      <div className="form-items-wrapper">
        <p className="form-item-label"> Name: </p>
        <input
          id="name-input"
          className="form-inputs"
          type="text"
          maxLength="50"
          placeholder="Enter name..."
          required
          value={senderName}
          onChange={(e) =>
            setContactFormData({
              ...contactFormData,
              senderName: e.target.value,
            })
          }></input>
      </div>
      <div className="form-items-wrapper">
        <p className="form-item-label">
          {" "}
          E-mail:{" "}
          {!isValidEmail && <span className="invalid-form-input">!</span>}
        </p>
        <input
          id="email-input"
          className="form-inputs"
          maxLength="50"
          type="email"
          placeholder="Enter e-mail..."
          required
          value={senderEmail}
          onChange={(e) => handleOnChange(e, "senderEmail")}></input>
      </div>
      <div className="form-items-wrapper">
        <p className="form-item-label"> Company: (optional)</p>
        <input
          id="company-input"
          className="form-inputs"
          type="text"
          maxLength="50"
          placeholder="Enter company..."
          value={senderCompany}
          onChange={(e) =>
            setContactFormData({
              ...contactFormData,
              senderCompany: e.target.value,
            })
          }></input>
      </div>
      <div className="form-items-wrapper">
        <p className="form-item-label">
          {" "}
          Phone: (optional){" "}
          {!isValidPhone && <span className="invalid-form-input">!</span>}
        </p>
        <input
          id="phone-input"
          className="form-inputs"
          type="tel"
          maxLength="20"
          placeholder="Enter phone..."
          value={senderPhone}
          onChange={(e) => handleOnChange(e, "senderPhone")}></input>
      </div>
      <div className="form-items-wrapper">
        <p className="form-item-label"> Message: </p>
        <textarea
          id="message-input"
          className="form-inputs"
          type="text"
          placeholder="Enter message..."
          maxLength="500"
          rows="10"
          required
          value={senderMessage}
          onChange={(e) =>
            setContactFormData({
              ...contactFormData,
              senderMessage: e.target.value,
            })
          }></textarea>
      </div>
      <button> SEND </button>
      {loadingModal}
      <div
        id="confirmation"
        style={{
          top: submitted ? "10%" : "-50%",
          opacity: submitted ? "1" : "0",
        }}>
        <i className="fas fa-check"></i>
        <div id="confirmation-text">
          <p>Form successfully submitted!</p>
          <p>Thanks for contacting me. I'll get back to you ASAP!</p>
        </div>
      </div>
    </form>
  );
};

export default Form;
