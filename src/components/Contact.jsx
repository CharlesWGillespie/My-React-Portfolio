import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="form">
      <div className="title">Contact Me</div>
      <div className="input-container ic1">
        <input 
          id="firstname" 
          className="input" 
          type="text" 
          name="firstname" 
          value={formData.firstname} 
          onChange={handleChange} 
          placeholder=" " 
          required 
        />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input 
          id="lastname" 
          className="input" 
          type="text" 
          name="lastname" 
          value={formData.lastname} 
          onChange={handleChange} 
          placeholder=" " 
          required 
        />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Last name</label>
      </div>
      <div className="input-container ic2">
        <input 
          id="email" 
          className="input" 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder=" " 
          required 
        />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <textarea 
          id="message" 
          className="input" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder=" " 
          required 
        />
        <div className="cut"></div>
        <label htmlFor="message" className="placeholder">Message</label>
      </div>
      <button type="submit" className="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ContactForm;