import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ContactStyle = styled.div`
  margin: 50px 0px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }

  .contact-page {
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    margin-top: 45px;
    flex-direction: column-reverse;
    padding: 0px 16px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    @media screen and (min-width: 1261px) {
      padding: 0px;
    }
    .left-section {
      width: 100%;
      margin-top: 40px;
      @media screen and (min-width: 768px) {
        max-width: 50%;
        margin-top: 0px;
      }
    }
    .right-section {
      width: 100%;
      @media screen and (min-width: 768px) {
        max-width: 50%;
      }

      .contact-form {
        form {
          label {
            display: block;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          input,
          textarea {
            width: 100%;
            padding: 10px 15px;
            margin-bottom: 30px;
            border: 1px solid #949494;
            border-radius: 20px;
            display: block;
          }

          button {
            padding: 15px 25px;
            border-radius: 100px;
            border: none;
            background: #161618;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
    .contact-block {
      margin-bottom: 20px;
      h6 {
        margin-bottom: 16px;
        font-size: 16px;
      }

      p {
        max-width: calc(100% - 50px);
        line-height: 24px;
        color: #949494;
        font-size: 14px;
        @media screen and (min-width: 1260px) {
          max-width: 400px;
        }
      }

      a {
        display: inline-block;
        img {
          max-width: 30px;
          margin-right: 8px;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyle>
      <h1>Contact Us</h1>
      <div className="container">
        <div className="contact-page">
          <div className="left-section">
            <div className="contact-block">
              <h6>🗺 ADDRESS</h6>
              <p>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="contact-block">
              <h6>💌 EMAIL</h6>
              <p>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="contact-block">
              <h6>☎ PHONE</h6>
              <p>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="contact-block">
              <h6>🌏 SOCIALS</h6>
              <div className="social-images">
                <NavLink to="/">
                  <img src="./facebook.svg" alt="Facebook" />
                </NavLink>
                <NavLink to="/">
                  <img src="./youtube.svg" alt="Youtube" />
                </NavLink>
                <NavLink to="/">
                  <img src="./twitter.svg" alt="Twitter" />
                </NavLink>
                <NavLink to="/">
                  <img src="./telegram.svg" alt="Telegram" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="contact-form">
              <form action="https://formspree.io/f/mzbqerok" method="POST">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  required
                  autoComplete="off"
                />
                <label>Email Adress</label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  name="email"
                  required
                  autoComplete="off"
                />
                <label>Message</label>
                <textarea
                  rows={6}
                  placeholder="Type Your Message here!!"
                  name="message"
                  required
                  autoComplete="off"
                />

                <button type="submit" value="send">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;
