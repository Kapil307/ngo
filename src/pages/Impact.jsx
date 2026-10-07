import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/variables.css";
import "../styles/global.css";
import "./Impact.css";


function Impact() {
  return (
    <div className="impact-page">

      {/* ================= HERO ================= */}

      <section className="impact-hero">

        <img
          src="/image/impact.png"
          alt="Witness the Change"
        />

        <div className="impact-overlay"></div>

        <Navbar />

        <div className="impact-hero-title">
          <h1>
            Witness the Change
            <br />
            Real Stories, Real Impact
          </h1>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="impact-content">

        <div className="impact-container">

          <h2>Our Impact</h2>

          <p>
            At Adhishrihaan Foundation, our work is defined by the profound
            transformations we enable through our dedicated grassroots partners.
            We believe in the power of every story, every life touched, and every
            community uplifted.
          </p>

          <p>
            We amplify the voices of the silent warriors — the individuals and
            communities benefiting from the tireless efforts of our supported
            NGOs. From a child accessing quality education to the first time,
            a woman gaining vocational skills that ensure her family's livelihood,
            or an animal rescued and rehabilitated, these are the true reflections
            of our mission in action.
          </p>


          {/* ================= IMPACT CARDS ================= */}

          <h3 className="impact-explore">
            Explore Our Impact Through
          </h3>

          <div className="impact-cards">

            {/* CARD 1 */}

            <div className="impact-card">

              <h4>
                Beneficiary Stories
              </h4>

              <p>
                Hear directly from individuals whose lives have been
                transformed.
              </p>

              <Link to="/beneficiary-stories">
                Read More
              </Link>

            </div>


            {/* CARD 2 */}

            <div className="impact-card">

              <h4>
                Project Spotlight
              </h4>

              <p>
                Deep dives into specific initiatives our partner NGOs are
                undertaking, highlighting challenges and successes.
              </p>

              <Link to="/project-spotlight">
                Read More
              </Link>

            </div>


            {/* CARD 3 */}

            <div className="impact-card">

              <h4>
                Impact Reports
              </h4>

              <p>
                Transparent summaries of collective achievements, data-driven
                insights into our reach and outcomes.
              </p>

              <Link to="/impact-reports">
                Read More
              </Link>

            </div>


            {/* CARD 4 */}

            <div className="impact-card">

              <h4>
                Photo &amp; Video Galleries
              </h4>

              <p>
                Visual journeys showcasing the dedication of our partners
                and the vibrant communities they serve.
              </p>

              <Link to="/gallery">
                Read More
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="impact-cta">

        <div className="impact-cta-inner">

          <h2>
            Be Part of the Change
          </h2>

          <p>
            Your support can help strengthen the people and organizations
            creating change at the grassroots level.
          </p>

          <div className="impact-cta-buttons">

            <Link
              to="/donate"
              className="outline-btn"
            >
              DONATE
            </Link>

            <Link
              to="/volunteer"
              className="outline-btn"
            >
              VOLUNTEER
            </Link>

          </div>

        </div>

      </section>


     

      <Footer />

    </div>
  );
}

export default Impact;