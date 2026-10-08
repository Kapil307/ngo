import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/global.css";
import "../styles/variables.css";
import "./Events.css";

import pastEvents from "../data/pastEvents.json";


function Events() {

  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="events-page">

      <Navbar />
      {/* HERO */}

      <section className="inner-hero events-hero">

        <div className="hero-img">
          <img
            src="/image/about.webp"
            alt="Events"
          />
        </div>



        <div className="inner-hero-overlay"></div>

        <div className="inner-hero-content">

          <h1>
            {activeTab === "upcoming"
              ? "Upcoming Events"
              : "Past Events"}
          </h1>

        </div>

      </section>


      {/* EVENTS SECTION */}

      <section className="events-section">

        <div className="events-container">


          {/* TABS */}

          <div className="events-tabs">

            <button
              type="button"
              className={`events-tab ${activeTab === "upcoming" ? "active" : ""
                }`}
              onClick={() => setActiveTab("upcoming")}
            >
              UPCOMING EVENTS
            </button>


            <button
              type="button"
              className={`events-tab ${activeTab === "past" ? "active" : ""
                }`}
              onClick={() => setActiveTab("past")}
            >
              PAST EVENTS
            </button>

          </div>


          {/* UPCOMING EVENTS */}

          {activeTab === "upcoming" && (

            <div className="events-coming-soon">

              <h2>COMING SOON...</h2>

              <p>
                Exciting community initiatives and events are on the way.
                Stay connected for updates.
              </p>

            </div>

          )}


          {/* PAST EVENTS */}

          {activeTab === "past" && (

            <div className="events-list">

              {pastEvents.map((event, index) => (

                <article
                  className="event-card"
                  key={`${event.title}-${index}`}
                >

                  {/* IMAGE */}

                  <div className="event-card-image">

                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                    />

                  </div>


                  {/* CONTENT */}

                  <div className="event-card-content">

                    {/* META */}

                    <div className="event-card-meta">

                      {event.date && (
                        <span>
                          <i className="bi bi-calendar3"></i>
                          {event.date}
                        </span>
                      )}

                      {event.location && (
                        <span>
                          <i className="bi bi-geo-alt"></i>
                          {event.location}
                        </span>
                      )}

                    </div>


                    {/* TITLE */}

                    <h2>
                      {event.title}
                    </h2>


                    {/* DESCRIPTION */}

                    <p>
                      {event.description}
                    </p>


                    {/* BUTTON */}

                    <Link
                      to="/impact"
                      className="green-btn"
                    >
                      VIEW IMPACT
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* CTA */}

      <section className="events-cta">

        <div className="events-cta-inner">

          <h2>Be Part of Our Journey</h2>

          <p>
            Join us in creating meaningful change within communities.
          </p>

          <div className="events-cta-buttons">

            <Link
              to="/volunteer"
              className="outline-btn"
            >
              VOLUNTEER
            </Link>

            <Link
              to="/donate"
              className="outline-btn"
            >
              DONATE
            </Link>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <Footer />

    </div>
  );
}


export default Events;
