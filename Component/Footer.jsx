import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Style/Button";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="container grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>
            <div className="contact-short-btn">
              <NavLink to="/contact">
                <Button>order now</Button>
              </NavLink>
            </div>
          </div>
        </section>

        <footer>
          <div className="container grid grid-three-column">
            <div className="footer-about">
              <h3>Contact us</h3>
              <p>Phone: +923024767172</p>
              <p>Gmail: mudassir.rafiq.217@gmail.com</p>
            </div>
            <div className="footer-subscribe">
              <h3>Admin Record</h3>
              <form action="">
                <input type="textarea" autoComplete="off" required />
              </form>
              <input type="submit" value="submit" />
            </div>
            <div className="footer-social">
              <h3>Follow us</h3>
              <div className="footer-social--icons">
                <div>
                <a href="http://instagram.com/mudassir.rafiq.007"> 
                <FaInstagram className="icons" />
                </a>
                </div>
                <div>
                  <a href="http://linkedin.com/in/mudassirrafiq007">
                    <FaLinkedin className="icons" />
                  </a>
                </div>
                <div>
                <a href="http">
                <FaYoutube className="icons" />
                </a>
                </div>
                <div>
                  <a href="http://facebook.com/mudassir.rafiq.007">
                    <FaFacebook className="icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>@{new Date().getFullYear} lapi. All Rights Reserved</p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    transform: translatey(50%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};

  }
  .contact-short-btn {
      justify-self: end;
      align-self: center;
    }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;

    div {
      padding: 2rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }
  .footer-bottom--section {
    padding: 9rem;

    hr {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: rem;
      height: 0.1px;
    }
  }
  @media (max-width:${({ theme }) => theme.media.tab}){
    .container{
        padding: 0 3.2rem;
    }
    .grid-three-column{
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width:${({ theme }) => theme.media.mobile}){
  .contact-short{
    padding: 2rem;
    max-width: 95vw;
    display: flex;
    align-item: center;
    justify-content: center;
  }
  .contact-short-btn{
  text-align: center;
  justify-self: center;
  }
    html{
        font-size: 50%;
    }
.grid{
    gap: 3.2rem;
}
.grid-two-column , .grid-three-column{
    grid-template-columns: 1fr;
}
}

`;

export default Footer;
