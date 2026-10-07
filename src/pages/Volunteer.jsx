import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/variables.css";
import "../styles/global.css";
import "./Volunteer.css";

function Volunteer() {
  return (
    <div className="volunteer-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="volunteer-hero">

        {/* HERO IMAGE */}
        <div className="volunteer-hero-image">
          <img
            src="/image/volunteer.png"
            alt="Volunteers working together"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="volunteer-hero-overlay"></div>

        {/* NAVBAR */}
        <Navbar />

        {/* HERO TITLE */}
        <div className="volunteer-hero-content">
          <h1>
            Volunteer: Lend Your Time &amp; Skills
          </h1>
        </div>

      </section>


      {/* =================================================
          INTRO
      ================================================= */}

      <section className="volunteer-intro">

        <div className="volunteer-container">

          <span className="section-label">
            VOLUNTEER
          </span>

          <h2>
            Volunteer
          </h2>

          <p>
            Your time and expertise are invaluable. We offer structured
            volunteer programs that allow skilled individuals to contribute
            directly to our capacity-building efforts, strengthening our
            partner NGOs. General volunteers are also crucial for events
            and community outreach.
          </p>

        </div>

      </section>


      {/* =================================================
          APPLICATION FORM
      ================================================= */}

      <section className="volunteer-application">

        <div className="volunteer-container">

          <div className="volunteer-form-card">

            <h2>
              Apply for Volunteering Now!
            </h2>

            <form>

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                required
              />

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              {/* OPPORTUNITY */}
              <select defaultValue="">
                <option value="" disabled>
                  Volunteer Opportunities
                </option>

                <option value="education">
                  Education
                </option>

                <option value="healthcare">
                  Healthcare
                </option>

                <option value="women-child">
                  Women &amp; Child Welfare
                </option>

                <option value="environment">
                  Environment
                </option>

                <option value="animal">
                  Animal Welfare
                </option>

                <option value="elderly">
                  Elderly Care
                </option>

                <option value="skill">
                  Skill Development
                </option>
              </select>

              {/* SUBMIT */}
              <button
                type="submit"
                className="volunteer-submit"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default Volunteer;