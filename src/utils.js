import * as emailjs from "emailjs-com";
// npm WARN deprecated emailjs-com@3.2.0: The SDK name changed to @emailjs/browser

export const submitForm = (contactFormData) => {
  const { senderName, senderEmail, senderCompany, senderPhone, senderMessage } =
    contactFormData;

  const {
    REACT_APP_EMAILJS_RECEIVER: receiverEmail,
    REACT_APP_EMAILJS_TEMPLATEID: templateID,
    REACT_APP_EMAILJS_USERID: userID,
  } = import.meta.env;

  const templateParams = {
    name: senderName,
    receiverEmail: receiverEmail,
    company: senderCompany,
    phone: senderPhone,
    senderEmail: senderEmail,
    message: senderMessage,
  };

  return emailjs
    .send("mailgun", templateID, templateParams, userID)
    .then((res) => {
      console.log(res);
      return [false, true]; // for updating the formStatus state ie: [loading, submitted]
    })
    .catch((err) => alert("Failed to send message. Error ", err));
};

// export const debounce = (func, wait, immediate) => {
//     var timeout;
//     return function() {
//         var context = this, args = arguments;
//         var later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

export const debounce = (func, delay) => {
  console.log("debouncing");
  let debounceTimer = null;
  return (...args) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const validatePhoneNumber = (str) => {
  let validPhoneNumber = /^(\+?1\s?-?)? ?(\d{3}|\(\d{3}\))-? ?\d{3}-? ?\d{4}$/;
  return validPhoneNumber.test(str);
};

export const validateEmail = (str) => {
  let validEmail = /^(\w|[^\w\s])+@(\w|[^\w\s])+\.(\w|[^\w\s])+$/;
  return validEmail.test(str);
};
