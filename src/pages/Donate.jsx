import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/global.css"
import "../styles/variables.css"
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "./Donate.css";

function Donate() {
  return (
    <div className="donate-page">

      <Navbar />
      {/* HERO */}

      <section className="donate-hero">

        {/* HERO IMAGE */}
        <img
          src="/image/about.webp"
          alt="Donate"
          className="donate-hero-image"
        />

        {/* DARK OVERLAY */}
        <div className="donate-hero-overlay"></div>

        {/* NAVBAR */}


        {/* HERO TITLE */}
        <div className="donate-hero-content">
          <h1>Donate: Fuelling Transformation</h1>
        </div>

      </section>


      {/* DONATION SECTION */}

      <section className="donation-section">

        <Container>

          <Row className="justify-content-center g-4">

            {/* UPI CARD */}

            <Col xs={12} md={6} lg={4}>

              <div className="donate-card upi-card">

                <h3>
                  Donate via UPI
                </h3>

                {/* ICICI LOGO */}

                <img
                  src="/images/icici-bank.png"
                  alt="ICICI Bank"
                  className="icici-logo"
                />

                {/* FOUNDATION NAME */}

                <p className="foundation-name">
                  M/S. ADHISHRHAAN FOUNDATION
                </p>

                <p className="scan-text">
                  Scan &amp; Pay
                </p>

                {/* QR CODE */}

                <img
                  src="/images/upi-qr.png"
                  alt="UPI QR Code"
                  className="upi-qr"
                />

                {/* UPI ID */}

                <p className="upi-id">
                  UPI ID : MSADHISHRHAANFOUNDATION@icici
                </p>

                {/* UPI BRAND */}

                <div className="upi-bottom">
                  <strong>BHIM</strong>
                  <span>/</span>
                  <strong>UPI</strong>
                </div>

                {/* PAYMENT LOGOS */}

                <div className="payment-logos">

                  <span>
                    iMobile
                  </span>

                  <span>
                    ER
                  </span>

                  <span>
                    G Pay
                  </span>

                  <span>
                    BHIM
                  </span>

                </div>

              </div>

            </Col>


            {/* NEFT/RTGS CARD */}

            <Col xs={12} md={6} lg={4}>

              <div className="donate-card neft-card">

                <h3>
                  Donate via NEFT/RTGS
                </h3>

                <p>
                  Details Coming Soon
                </p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* CALL TO ACTION */}

      <section className="donate-cta">

        <div className="donate-cta-inner">

          <h2>
            Every Contribution Matters
          </h2>

          <p>
            Your support can help strengthen communities
            and create meaningful opportunities.
          </p>

          <Link
            to="/volunteer"
            className="outline-btn"
          >
            GET INVOLVED
          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default Donate;