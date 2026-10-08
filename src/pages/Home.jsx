import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/global.css";
import "../styles/variables.css";
import "./Home.css";

import pillars from "../data/data.json";
import focusAreas from "../data/focusArea.json";

import homeEducation from "../assets/homeEducation.png";
import homeEnvirment from "../assets/homeEnvirment.png";
import elderlycare from "../assets/elderlycare.jpg";
import homeAnimal from "../assets/homeAnimal.png";
import healthcare from "../assets/healthcare.jpg";
import skilldevelopment from "../assets/skilldevelopment.jpg";
import one from "../assets/one.png";
import puppy from "../assets/puppy.jpg";
import schoolGirls from "../assets/schoolGirls.png";
import skillWoman from "../assets/skillWoman.png";
import environment from "../assets/environment.jpg";
import hospital from "../assets/hospital.png";
import animalShelter from "../assets/animalSelter.png";

const images = {
  one,
  homeEducation,
  homeAnimal,
  homeEnvirment,
  healthcare,
  skilldevelopment,
  puppy,
  hospital,
  elderlycare,
  animalShelter,
  environment,
};

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <header className="hero-slider">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          {/* SLIDES */}
          <div className="carousel-inner">

            {/* SLIDE 1 */}
            <div
              className="carousel-item active"
              data-bs-interval="5000"
            >
              <div
                className="hero-section hero-short"
                style={{
                  backgroundImage: `url(${homeEducation})`,
                }}
              >
                <div className="hero-overlay"></div>

                <div className="hero-content">
                  <div className="hero-buttons">
                    <Link to="/about" className="outline-btn">
                      KNOW MORE
                    </Link>

                    <Link to="/volunteer" className="outline-btn">
                      VOLUNTEER
                    </Link>

                    <Link to="/donate" className="outline-btn">
                      DONATE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 2 */}
            <div
              className="carousel-item"
              data-bs-interval="5000"
            >
              <div
                className="hero-section hero-short"
                style={{
                  backgroundImage: `url(${homeAnimal})`,
                }}
              >
                <div className="hero-overlay"></div>

                <div className="hero-content">
                  <div className="hero-buttons">
                    <Link to="/about" className="outline-btn">
                      KNOW MORE
                    </Link>

                    <Link to="/volunteer" className="outline-btn">
                      VOLUNTEER
                    </Link>

                    <Link to="/donate" className="outline-btn">
                      DONATE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3 */}
            <div
              className="carousel-item"
              data-bs-interval="2000"
            >
              <div
                className="hero-section hero-short"
                style={{
                  backgroundImage: `url(${homeEnvirment})`,
                }}
              >
                <div className="hero-overlay"></div>

                <div className="hero-content">
                  <div className="hero-buttons">
                    <Link to="/about" className="outline-btn">
                      KNOW MORE
                    </Link>

                    <Link to="/volunteer" className="outline-btn">
                      VOLUNTEER
                    </Link>

                    <Link to="/donate" className="outline-btn">
                      DONATE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* PREVIOUS BUTTON */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">
              Previous
            </span>
          </button>

          {/* NEXT BUTTON */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">
              Next
            </span>
          </button>
        </div>
      </header>

      <section className="announcement-bar">
        Empowering Those Who Empower Others: Investing in Grassroots,
        Investing in India's Future.
      </section>

      <section className="home-intro">
        <div className="content-narrow">
          <p>
            At Adhishrihaan Foundation, we believe true transformation begins
            at the roots. We are the steadfast support system for the unsung
            heroes of community development: grassroots NGOs, nurturing their
            vital work with unwavering care and commitment.
          </p>

          <div className="intro-links">
            <Link to="/impact">DISCOVER OUR IMPACT</Link>
            <span> | </span>
            <Link to="/donate">SUPPORT OUR MISSION</Link>
          </div>
        </div>
      </section>

      <section className="what-we-do section-padding">
        <div className="section-heading">
          <h2>WHAT WE DO</h2>
          <p>OUR PILLARS OF SUPPORT</p>
        </div>

        <div className="content-narrow">
          {pillars.map((pillar) => (
            <div className="pillar-row" key={pillar.title}>
              <div className="pillar-title">
                {pillar.title}
              </div>

              <div className="pillar-content">
                <p>{pillar.text}</p>

                <p className="care-text">
                  <strong>Care in Action:</strong>{" "}
                  {pillar.care}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="focus-section">
        <div className="section-heading">
          <h2>OUR FOCUS AREAS</h2>
          <p>TOUCHING LIVES WITH COMPASSION</p>
        </div>

        <div className="row g-4">
          {focusAreas.map((area) => (
            <div className="col-md-4 col-sm-6" key={area.title}>
              <div className="card focus-card h-100">
                <div className="focus-image-wrapper">
                  <img
                    src={images[area.image]}
                    className="card-img-top"
                    alt={area.title}
                    loading="lazy"
                  />

                  <div className="focus-title-overlay">
                    {area.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grant-section">
        <div className="grant-content">

          <div className="grant-text">
            <h2>The Shrihaan Sahayog Grant</h2>

            <p>
              As a testament to our unwavering commitment to direct and
              impactful support, Adhishrihaan Foundation proudly offers the
              "Shrihaan Sahayog Grant". This annual grant provision provides
              critical funding to 3-5 carefully selected micro-NGOs that are
              undertaking powerful ground-level work but are often constrained
              by a lack of visibility or financial resources.
            </p>

            <Link to="/grant" className="green-btn">
              Know More
            </Link>
          </div>

          <div className="grant-image">
            <div
              id="grantCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="2000"
            >
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img
                    src={skillWoman}
                    alt="Grant support"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src={hospital}
                    alt="Grant activity"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src={schoolGirls}
                    alt="Community support"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="home-events">
        <div className="section-heading">
          <h2>Our Events</h2>
          <p>WHAT'S NEXT & WHAT'S BEEN</p>
        </div>

        <div className="event-preview">

          <div className="event-image">
            <img
              src={animalShelter}
              alt="Community event"
              loading="lazy"
            />
          </div>

          <div className="event-info">

            <h3>
              Guardians of all Voiceless – Cat Shelter Foundation Stone
            </h3>

            <div className="event-meta">
              <span>01-09-2025</span>
              <span>Patiala</span>
            </div>

            <p>
              In India, millions of street homeAnimal face challenges like lack
              of shelter, medical care and compassion.
            </p>

            <Link to="/events" className="green-btn">
              Read More
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;