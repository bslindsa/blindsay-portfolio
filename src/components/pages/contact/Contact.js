import React, { useState } from 'react';
import './Contact.css'

function Contact() {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setName or setEmail based on what field the user is typing in
    return name === 'name' ? setName(value) 
        : name === 'email' ? setEmail(value) 
        : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(` Thank you for reaching out. Your message has been sent.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>
        Hello {name}
      </p>
      <form className="form">
          <label>Name: </label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <label>Email Address: </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="example@email.com"
        />
        <label>Message: </label>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message here..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
