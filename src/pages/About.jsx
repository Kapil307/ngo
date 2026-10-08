import React from "react";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import "./About.css";

function About() {
    return (
        <div className="about-page">

            <Navbar />
            {/* =========================
          HERO SECTION
      ========================= */}
            <section className="inner-hero about-hero">

                <div className="hero-img">
                    <img
                        src="/image/about.webp"
                        alt="About Adhishrihaan"
                    />
                </div>



                <div className="inner-hero-overlay"></div>

                <div className="inner-hero-content">
                    <h1>Our Inspiration &amp; Ethos:</h1>
                    <p>Rooted in Love, Rising Through Service</p>
                </div>

            </section>


            {/* =========================
          ABOUT SECTION
      ========================= */}
            <section className="about-section">
                <div className="about-container">

                    <h2>About Adhishrihaan</h2>

                    <p>
                        Adhishrihaan is committed to creating meaningful change by
                        empowering communities, supporting people in need, and building
                        a better future through compassion and service.
                    </p>

                </div>
            </section>


            {/* =========================
          PURPOSE SECTION
      ========================= */}
            <section className="about-section about-light">
                <div className="about-container">

                    <h2>Our Purpose</h2>

                    <p>
                        Our purpose is to serve communities with dedication, encourage
                        positive development, and create opportunities that help people
                        live with dignity and hope.
                    </p>

                </div>
            </section>


            {/* =========================
          VISION SECTION
      ========================= */}
            <section className="about-section">
                <div className="about-container">

                    <h2>Our Vision</h2>

                    <p>
                        We envision a society where every individual has the opportunity
                        to grow, contribute, and build a secure and fulfilling future.
                    </p>

                </div>
            </section>


            {/* =========================
          MISSION SECTION
      ========================= */}
            <section className="about-section about-light">
                <div className="about-container">

                    <h2>Our Mission</h2>

                    <p>
                        Our mission is to transform lives through community initiatives,
                        education, environmental responsibility, and compassionate
                        action.
                    </p>

                </div>
            </section>


            {/* =========================
          FOOTER
      ========================= */}
            <Footer />

        </div>
    );
}

export default About;