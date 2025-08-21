import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { FaUsers, FaCogs, FaSmile, FaDollarSign, FaShieldAlt } from "react-icons/fa";


export const About = () => {
  const { user } = useAuth();

  return (
    <main>
      
       {/* Hero Section */}
        <section className="about-hero">
          <div className="container grid-two-column">
            
            {/* Left Content */}
            <div className="about-content">
              <p className="welcome-text">
                Welcome {user ? ` ${user.username},` : ""} to our website
              </p>
              <h1 className="hero-title">
                Why Choose <span className="highlight">Us?</span>
              </h1>
              <p className="hero-description">
                We bring innovation, expertise, and customer-focused solutions to empower your business in the digital era.
              </p>
              <NavLink to="/contact">
                <button className="hero-btn">Connect Now</button>
              </NavLink>
            </div>

            {/* Right Image */}
            <div className="about-image">
              <img
                src="/images/heroimgav.avif"
                alt="Our Team"
              />
            </div>
          </div>
        </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="features-container">
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Expert Team</h3>
            <p>Our professionals stay updated with the latest trends to deliver top-notch solutions.</p>
          </div>

          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Customization</h3>
            <p>We build solutions tailored to your unique needs and business goals.</p>
          </div>

          <div className="feature-card">
            <FaSmile className="feature-icon" />
            <h3>Customer-Centric</h3>
            <p>We prioritize your satisfaction with responsive support & services.</p>
          </div>

          <div className="feature-card">
            <FaDollarSign className="feature-icon" />
            <h3>Affordable</h3>
            <p>Competitive pricing without compromising on service quality.</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Reliable</h3>
            <p>Count on us for 24/7 support and a secure IT environment.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
