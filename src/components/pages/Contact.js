import React from 'react';

function handleBlur(event) {
  const blankErrorMsg = document.querySelector('#error-msg-blank');
  if (!event.target.value.trim()) {
    blankErrorMsg.innerText = 'These fields are required';
  } else {
    blankErrorMsg.innerText = '';
  }
}

export default function Contact() {
  return (
    <form action="#" className="">
      <div className="">
        <label htmlFor="email-name">Name: </label>
        <input type="text" name="email-name" id="email-name" onBlur={(e) => handleBlur(e)} required />
      </div>
      <div className="">
        <label htmlFor="email-address">Email Address: </label>
        <input type="email" name="email-address" id="email-address" onBlur={(e) => handleBlur(e)} required />
      </div>
      <div className="">
        <label htmlFor="email-message">Message: </label>
        <textarea name="email-message" id="email-message" rows="6" onBlur={(e) => handleBlur(e)} required></textarea>
      </div>
      <div id="error-msg-blank"></div>
      <button>
        Send
      </button>
    </form>
  );
}