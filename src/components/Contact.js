import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ContactImg from "../assets/contact.png";
import {
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiArrowRight, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import emailjs from "emailjs-com";

export default function Contact() {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID_CONTACT;
  const userId = process.env.REACT_APP_USER_ID;
  const accept_booking = true;

  // For enable/disable send button
  const [sendButton, setSendButton] = useState(true);

  // For setting message status text on button
  function messageStatus(statusText, statusIcon, flag) {
    // Create the elements
    const span = document.createElement("span");
    span.textContent = statusText;

    const i = document.createElement("i");
    const root = createRoot(i);
    root.render(statusIcon);

    if (flag === 0) {
      span.className = "text-uppercase";
    } else if (flag === 1) {
      span.className = "text-uppercase text-success";
      i.className = "text-success";
    } else {
      span.className = "text-uppercase text-danger";
      i.className = "text-danger";
    }

    // Clear the existing content
    const contactBtn = document.getElementById("contact-btn");
    contactBtn.innerHTML = "";

    // Append the elements to the button
    contactBtn.appendChild(span);
    contactBtn.appendChild(i);
  }

  // For sending message as email using emailjs
  function submitHandler(event) {
    event.preventDefault();

    setSendButton(false);
    messageStatus("Sending... ", <BiMailSend />, -1);

    // Get the user input
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("contact-phone").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("contact-message").value;

    // Prepare the template parameters
    const templateParams = {
      from_name: name,
      to_name: "Abhishek Tyagi",
      phone: phone,
      email: email,
      subject: subject,
      message: message,
    };

    // Send the email
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(function () {
        // Display success message
        messageStatus("Message Sent ", <FiCheckCircle />, 1);

        // Clear the form fields
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-phone").value = "";
        document.getElementById("contact-email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("contact-message").value = "";
      })
      .catch(function () {
        // Display error message
        messageStatus("Send failed ", <FiXCircle />, 2);
      })
      .finally(function () {
        setTimeout(() => {
          messageStatus("Send Message ", <FiArrowRight />, 0);
          setSendButton(true);
        }, 5000);
      });
  }

  return (
    <div className="container section-separator section-gap" id="contact">
      <div className="row">
        <div className="subtitle text-uppercase">Contact</div>
        <div className="title">Contact With Me</div>
        <div className="row flex-column flex-lg-row mt-5 p-0 mx-auto">
          <div className="col-lg-5">
            <div className="contact-about">
              <div className="thumbnail">
                <img src={ContactImg} alt="Contact" />
              </div>
              <div className="title-area">
                <h4 className="title text-start">Abhishek Tyagi</h4>
                <span className="designation">Web Developer</span>
              </div>
              <div className="description-area my-4">
                {accept_booking ? (
                  <p className="description">
                    I'm open to freelance opportunities. Feel free to reach out
                    to me through my contact information for further discussion.
                  </p>
                ) : (
                  <p className="description">
                    I'm currently unavailable for freelance opportunities,
                    you're welcome to contact me for other purposes, feedback,
                    or suggestions. Feel free to reach out through my contact
                    information, and I'll be happy to connect.
                  </p>
                )}
              </div>
              <div className="social-area">
                <div className="title text-uppercase text-start mt-5 mb-3">
                  Find With Me
                </div>
                <div className="icon-list d-flex flex-column flex-xxl-row align-items-start">
                  <div className="d-flex">
                    <a
                      href="https://instagram.com/abhinavtyagi2918/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://x.com/abhityagi2918/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                  <div className="d-flex mt-3 mt-xxl-0">
                    <a
                      href="https://t.me/abhishektyagi2918official/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegram />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/Iamabhishektyagi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://github.com/AbhishekTyagiOfficial/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-4 mt-lg-0">
            <div className="contact-form ms-lg-4">
              <form className="d-flex flex-wrap" onSubmit={submitHandler}>
                <div className="col-12">
                  <div className="form-group mb-4">
                    <label className="text-uppercase" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      name="contact-name"
                      id="contact-name"
                      type="text"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group me-lg-3 mb-4">
                    <label className="text-uppercase" htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      className="form-control form-control-lg no-spinner"
                      name="contact-phone"
                      id="contact-phone"
                      type="number"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group ms-lg-3 mb-4">
                    <label className="text-uppercase" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      className="form-control form-control-lg"
                      name="contact-email"
                      id="contact-email"
                      type="email"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-4">
                    <label className="text-uppercase" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="form-control form-control-lg"
                      name="subject"
                      id="subject"
                      type="text"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="text-uppercase" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      name="contact-message"
                      id="contact-message"
                      cols="20"
                      rows="10"
                      autoComplete="off"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    disabled={!sendButton}
                    className="btn-primary contact-btn my-3"
                    id="contact-btn"
                  >
                    <span className="text-uppercase">Send Message</span>{" "}
                    <i>
                      <FiArrowRight />
                    </i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
