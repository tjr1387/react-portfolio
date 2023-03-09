import React from 'react';

function handleBlur(event) {
  const blankErrorMsg = document.querySelector('#error-msg-blank');
  if (!event.target.value.trim()) {
    blankErrorMsg.innerText = 'These fields are required';
  } else {
    blankErrorMsg.innerText = '';
  }
}

const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

function validateEmail() {
  const emailInputEl = document.querySelector('#email-address');
  const emailMsgEl = document.querySelector('#error-msg-email');
  if (emailRegex.test(emailInputEl.value)) {
    emailMsgEl.innerText = '';
  } else {
    emailMsgEl.innerText = 'Please enter a valid email address';
  }
};

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <form action="#" id="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <label htmlFor="email-name">Name: </label>
          <input type="text" name="email-name" id="email-name" onBlur={(e) => handleBlur(e)} required />
        </div>
        <div className="form-field">
          <label htmlFor="email-address">Email Address: </label>
          <input type="email" name="email-address" id="email-address" onBlur={(e) => handleBlur(e)} onChange={validateEmail} required />
          <p className="error-text" id="error-msg-email"></p>
        </div>
        <div className="form-field">
          <label htmlFor="email-message">Message: </label>
          <textarea name="email-message" id="email-message" rows="10" onBlur={(e) => handleBlur(e)} required></textarea>
        </div>
        <div className="error-text" id="error-msg-blank"></div>
        <div id="send-btn">
          <button>Send</button>
        </div>
      </form>
    </>
  );
}