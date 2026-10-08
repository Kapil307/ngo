import "../styles/variables.css"
import "../styles/global.css"
import "./Footer.css"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">Adhishrihaan</div>

          <div className="footer-contact">
            <div>
              <span>Email</span>
              <p>info@adhishrihaan.com</p>
            </div>

            <div>
              <span>Phone</span>
              <p>+970 68 00 00 7</p>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <span>Follow Us</span>

          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </div>
        </div>

        <div className="footer-action">
          <span>Changing Lives, Building Futures.</span>
          <Link to="/donate" className="footer-donate">
            DONATE NOW
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2025 Adhishrihaan | All rights reserved | Designed by me
        </span>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/initiatives">Initiatives</Link>
          <Link to="/impact">Our Impact</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;