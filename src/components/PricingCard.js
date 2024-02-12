import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ReactModal from "react-modal";
import { GiCheckMark } from "react-icons/gi";
import {
  FiArrowRight,
  FiX,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiInfo,
} from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import emailjs from "emailjs-com";

export default function PricingCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookButton, setBookButton] = useState(true);
  const accept_booking = true;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID_BOOK;
  const userId = process.env.REACT_APP_USER_ID;

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
    const bookBtn = document.getElementById("book-btn");
    bookBtn.innerHTML = "";

    // Append the elements to the button
    bookBtn.appendChild(span);
    bookBtn.appendChild(i);
  }

  // For booking message as email using emailjs
  function submitHandler(event) {
    event.preventDefault();

    setBookButton(false);
    messageStatus("Your booking is being processed... ", <BiMailSend />, -1);

    // Get the user input
    const plan = document.getElementById("book-plan").value;
    const name = document.getElementById("book-name").value;
    const phone = document.getElementById("book-phone").value;
    const email = document.getElementById("book-email").value;
    const message = document.getElementById("book-message").value;

    // Prepare the template parameters
    const templateParams = {
      plan: plan,
      from_name: name,
      to_name: "Abhishek Tyagi",
      phone: phone,
      email: email,
      message: message,
    };

    // Book the email
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(function () {
        // Display success message
        messageStatus(
          "Booked! We'll be in touch shortly. ",
          <FiCheckCircle />,
          1
        );

        // Clear the form fields
        document.getElementById("book-name").value = "";
        document.getElementById("book-phone").value = "";
        document.getElementById("book-email").value = "";
        document.getElementById("book-message").value = "";
      })
      .catch(function () {
        // Display error message
        messageStatus(
          "Booking failed! Please give it another shot. ",
          <FiXCircle />,
          2
        );
      })
      .finally(function () {
        setTimeout(() => {
          messageStatus("Book My Service ", <FiArrowRight />, 0);
          setBookButton(true);
        }, 5000);
      });
  }

  return (
    <div
      className="container p-3 py-5 p-sm-5"
      id="pricingCard"
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-delay="0"
      data-aos-duration="500"
    >
      <div className="pricing-header d-flex flex-column flex-sm-row justify-content-sm-between my-2">
        <div className="pricing-title">
          <h2>{props.title}</h2>
          <span>{props.subtitle}</span>
        </div>

        <div className="pricing-rate mt-4 mt-sm-0">
          <span>{props.rate}</span>
        </div>
      </div>

      <div className="pricing-body my-5">
        <p className="pricing-description">{props.description}</p>
        <div className="features-points d-flex flex-column flex-sm-row justify-content-between my-sm-5">
          <div className="col-sm-6 col-12">
            <ul style={{ listStyle: "none", padding: "0", margin: "0px" }}>
              {props.featuresArray
                .slice(0, props.featuresArray.length / 2)
                .map((item, index) => (
                  <li
                    key={index}
                    style={{
                      margin: "15px 0px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i className="me-2" style={{ alignSelf: "flex-start" }}>
                      <GiCheckMark />
                    </i>{" "}
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-sm-6 col-12 ps-sm-4">
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {props.featuresArray
                .slice(
                  props.featuresArray.length / 2,
                  props.featuresArray.length + 1
                )
                .map((item, index) => (
                  <li
                    key={index}
                    style={{
                      margin: "15px 0px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i className="me-2" style={{ alignSelf: "flex-start" }}>
                      <GiCheckMark />
                    </i>{" "}
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pricing-footer">
        <button className="btn-primary pricing-btn" onClick={openModal}>
          <span className="text-uppercase">Book My Service</span>{" "}
          <i>
            <FiArrowRight />
          </i>
        </button>

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          ariaHideApp={false}
        >
          <button className="modal-close-btn" onClick={closeModal}>
            <i>
              <FiX />
            </i>
          </button>

          <div className="modal-dialog pe-auto modal-dialog-centered m-4 mt-5">
            <div className="book-form mx-auto">
              {accept_booking ? (
                <form className="d-flex flex-wrap" onSubmit={submitHandler}>
                  <div className="col-12">
                    <div className="form-group mb-4">
                      <label className="text-uppercase" htmlFor="book-plan">
                        Plan Details
                      </label>
                      <input
                        className="form-control form-control-lg"
                        name="book-name"
                        id="book-plan"
                        type="text"
                        value={props.plan + " Plan - " + props.rate}
                        readOnly
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-4">
                      <label className="text-uppercase" htmlFor="book-name">
                        Name
                      </label>
                      <input
                        className="form-control form-control-lg"
                        name="book-name"
                        id="book-name"
                        type="text"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="form-group me-lg-3 mb-4">
                      <label className="text-uppercase" htmlFor="book-phone">
                        Phone Number
                      </label>
                      <input
                        className="form-control form-control-lg no-spinner"
                        name="book-phone"
                        id="book-phone"
                        type="number"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="form-group ms-lg-3 mb-4">
                      <label className="text-uppercase" htmlFor="book-email">
                        Email
                      </label>
                      <input
                        className="form-control form-control-lg"
                        name="book-email"
                        id="book-email"
                        type="email"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="text-uppercase" htmlFor="book-message">
                        Message
                      </label>
                      <textarea
                        name="book-message"
                        id="book-message"
                        cols="20"
                        rows="10"
                        autoComplete="off"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      disabled={!bookButton}
                      className="btn-primary book-btn my-3"
                      id="book-btn"
                    >
                      <span className="text-uppercase">Book My Service</span>{" "}
                      <i>
                        <FiArrowRight />
                      </i>
                    </button>
                  </div>
                </form>
              ) : (
                <h5 className="text-danger my-4">
                  Currently Unavailable for Bookings
                </h5>
              )}
            </div>
          </div>
        </ReactModal>

        <div className="note-point d-flex flex-column flex-md-row justify-content-center">
          <span className="time-line mx-md-3">
            <i>
              <FiClock />
            </i>
            <span> {props.delivery} Delivery</span>
          </span>
          <span className="info-line mx-md-2">
            <i>
              <FiInfo />
            </i>
            <span> Delivery time and pricing are estimated</span>
          </span>
        </div>
      </div>
    </div>
  );
}
