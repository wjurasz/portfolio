import React from 'react';
import "./Contact.css";
import { toast } from 'react-toastify';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d31b0e4-5189-4224-99ea-1f1475445fac");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success(" " + res.message);
      event.target.reset(); // czyści formularz po wysłaniu
    } else {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch!</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Contact Me!</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/Icons/gmail.png" className='icons' alt="Gmail" />
              <p>juraszwojtek03@gmail.com</p>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/Icons/LinkedIn_icon.svg.webp" className='icons' alt="LinkedIn" />
              <p>
                <a 
                  href="https://www.linkedin.com/in/wojciech-jurasz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='contact-link'
                >
                  https://www.linkedin.com/in/wojciech-jurasz/
                </a>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <div className="contact-right-info">Leave a message!</div>
          <label>Your Name</label>
          <input type='text' placeholder='Enter Your name' name='name' required />
          <label>Your Email</label>
          <input type='email' placeholder='Enter Your email' name='email' required />
          <label>Write Your message here!</label>
          <textarea name='message' rows='8' placeholder='Enter Your message' required></textarea>
          <button type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
