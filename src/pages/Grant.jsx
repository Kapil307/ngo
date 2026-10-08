import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./Grant.css"
import "../styles/global.css"
import "../styles/variables.css"

function Grant() {
  return (
    <div className="grant-page">

<Navbar />
      {/* HERO */}
      <section className="inner-hero grant-hero">

  <div className="hero-img">
    <img
      src="/image/about.webp"
      alt="Shrihaan Sahayog Grant"
    />
  </div>

  

  <div className="inner-hero-overlay"></div>

  <div className="inner-hero-content">
    <h1>Nurturing Dreams, Fueling Impact</h1>
    <h2>The Shrihaan Sahayog Grant</h2>
  </div>

</section>


      {/* INTRO */}
      <section className="grant-intro section-padding">

        <div className="grant-page-container">

          <h2>The Shrihaan Sahayog Grant</h2>

          <p>
            As a testament to our unwavering commitment to direct and
            impactful support, Adhishrihaan Foundation proudly offers the
            "Shrihaan Sahayog Grant".
          </p>

          <p>
            This annual grant provision provides critical funding to 3-5
            carefully selected micro-NGOs that are undertaking powerful
            ground-level work but are often constrained by a lack of
            visibility or financial resources.
          </p>

          <p>
            The grant is designed to provide flexible, timely and meaningful
            support to organizations that are creating measurable change
            within their communities.
          </p>

        </div>

      </section>

      {/* IMPACT */}
      <section className="grant-impact">

        <div className="grant-page-container">

          <div className="section-heading">
            <h2>How the Grant Makes a Difference</h2>
          </div>

          <div className="grant-impact-grid">

            <div className="grant-impact-card">
              <div className="grant-icon">
                <i className="bi bi-heart"></i>
              </div>

              <h3>Empowering Grassroots</h3>

              <p>
                Supporting organizations that work directly with communities
                and understand their needs from the ground level.
              </p>
            </div>

            <div className="grant-impact-card">
              <div className="grant-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>Supporting Changemakers</h3>

              <p>
                Providing resources to individuals and organizations that
                dedicate themselves to creating meaningful social change.
              </p>
            </div>

            <div className="grant-impact-card">
              <div className="grant-icon">
                <i className="bi bi-bar-chart"></i>
              </div>

              <h3>Creating Sustainable Impact</h3>

              <p>
                Helping initiatives strengthen their work and create
                long-term benefits for the communities they serve.
              </p>
            </div>

            <div className="grant-impact-card">
              <div className="grant-icon">
                <i className="bi bi-stars"></i>
              </div>

              <h3>Amplifying Visibility</h3>

              <p>
                Giving grassroots organizations the recognition and visibility
                needed to reach more people and build stronger partnerships.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="grant-cta">

        <div className="grant-cta-inner">

          <h2>Supporting Those Who Create Change</h2>

          <p>
            Together, we can strengthen grassroots organizations and help
            their work reach even more communities.
          </p>

          <Link to="/donate" className="outline-btn">
            SUPPORT OUR MISSION
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Grant;