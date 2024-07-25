/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactMe from "../../assets/img/contactUs.svg";
import "../Contact_Me/Contact.css";
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e5a5b37d-4edc-4f9c-8f58-51523a0bf0cc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
            <img src={contactMe} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={onSubmit} >

              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="First-name"
                    placeholder="First Name"
                    
                  />
                </Col>
                <Col sm={6} className="px-1" value='lastName'>
                  <input
                    type="text"
                    name="Last-name"
                    placeholder="Last Name"
                    
                  />
                </Col>
                <Col sm={6} className="px-1" value="Phone">
                  <input
                    type="tel"
                    name="Mobile"
                    placeholder="Mobile"
                    
                  />
                </Col>
                <Col sm={6} className="px-1" value="Email">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    name="Message"
                    placeholder="Message"
                    
                  ></textarea>
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
                <span className="result mt-3">{result}</span>
              </Row>
            </form>

            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
