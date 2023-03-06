import React from 'react';

export default function Contact() {
  return (
    <form action="#" class="">
      <div class="">
        <label for="email-name">Name: </label>
        <input type="text" name="email-name" id="email-name" required />
      </div>
      <div class="">
        <label for="email-address">Email Address: </label>
        <input type="email" name="email-address" id="email-address" required />
      </div>
      <div class="">
        <label for="email-message">Message: </label>
        <textarea name="email-message" id="email-message" rows="6" required></textarea>
      </div>
      <button>
        Send
      </button>
    </form>
  );
}