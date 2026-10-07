import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="inner-hero about-hero">
            <img src="/image/about.png" alt="About" />
        <Navbar />

        
        <div className="inner-hero-overlay"></div>

        <div className="inner-hero-content">
          <h1>Our Inspiration & Ethos:</h1>
          <h2>Rooted in Love, Rising Through Service</h2>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-content section-padding">

        <div className="about-container">

          <section className="about-block">
            <h2>About Adhishrihaan</h2>

            <p>
              Adhishrihaan Foundation is a philanthropic organization deeply
              committed to fostering profound and sustainable social change.
              We are inspired by the ancient Indian principle of 'Seva'
              (selfless service) and our commitment to creating a lasting
              positive transformation.
            </p>

            <p>
              We are driven by a legacy of compassion and change, striving to
              create lasting positive transformation within communities.
              Every initiative undertaken by the foundation is imbued with
              the spirit of empowering communities, honouring heritage, and
              ensuring our efforts not only uplift but also respect the
              integrity of the individuals and communities we serve.
            </p>
          </section>

          <section className="about-block">
            <h2>
              Our Purpose: The Backbone for Frontline Changemakers
            </h2>

            <p>
              In a landscape where genuine, on-the-ground impact often lacks
              scalable resources and visibility, Adhishrihaan Foundation
              steps in to bridge this critical gap. Our core purpose is to be
              the critical backbone for smaller, purpose-driven
              Non-Governmental Organizations (NGOs) operating directly within
              communities, primarily across Punjab, India.
            </p>

            <p>
              We firmly believe that strengthening those who empower others –
              the silent warriors making a real difference – is the most
              effective pathway to collective upliftment and a more
              compassionate society.
            </p>
          </section>

          <div className="vision-mission-grid">

            <div className="vision-mission-card">
              <h3>Our Vision</h3>

              <p>
                To be the unwavering backbone support system for grassroots
                NGOs across the state of Punjab and beyond, fostering a
                vibrant ecosystem of empowered changemakers that effectively
                drive profound, sustainable social impact for generations to
                come.
              </p>
            </div>

            <div className="vision-mission-card">
              <h3>Our Mission</h3>

              <p>
                To nurture and uplift grassroots changemakers in Punjab by
                offering them support, capacity and visibility, diligently
                carrying forward a legacy of 'Seva' in Adhishrihaan name,
                ensuring no genuine effort is left unheard or unsupported.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;
