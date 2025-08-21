import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { FaUsers, FaCogs, FaSmile, FaDollarSign, FaShieldAlt, FaLightbulb, FaProjectDiagram, FaEye, FaGlobe } from "react-icons/fa";


export const About = () => {
  const { user } = useAuth();

  return (
    <main>
      
       {/* Hero Section */}
        <section className="section about-hero">
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
               We’re more than just an IT company—we’re your trusted growth partner. With innovation, reliability, and a people-first approach, we deliver technology solutions that drive real business impact.
              </p>
              <NavLink to="/contact">
                <button className="btn">Connect Now</button>
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
            <p>Our team of certified professionals brings deep industry knowledge and hands-on expertise. We stay ahead of the curve by continuously adapting to the latest technologies and trends, ensuring your business benefits from innovative and reliable solutions.</p>
          </div>

          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Customization</h3>
            <p>Every business is unique — and so are our solutions. We design and deliver tailored IT strategies that align with your specific goals, challenges, and vision, ensuring maximum impact and long-term growth.</p>
          </div>

          <div className="feature-card">
            <FaSmile className="feature-icon" />
            <h3>Customer-Centric</h3>
            <p>Your success is our priority. We maintain a client-first approach by offering responsive communication, proactive support, and personalized services to build lasting relationships based on trust and satisfaction.</p>
          </div>

          <div className="feature-card">
            <FaDollarSign className="feature-icon" />
            <h3>Affordable</h3>
            <p>We believe high-quality IT services shouldn’t come with an overwhelming price tag. Our competitive pricing models are designed to deliver premium solutions that fit your budget without compromising on performance or quality.</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Reliable</h3>
            <p>Count on us as your trusted IT partner. With 24/7 support, secure infrastructure, and a commitment to excellence, we ensure your business operations run smoothly, securely, and without interruption.</p>
          </div>

          <div className="feature-card">
            <FaLightbulb className="feature-icon" />
            <h3>Innovation</h3>
            <p>We embrace emerging technologies to deliver forward-thinking solutions that keep your business ahead of the competition.</p>
          </div>

          <div className="feature-card">
            <FaProjectDiagram className="feature-icon" />
            <h3>Scalability</h3>
            <p>Our solutions grow with your business. Whether you’re a startup or enterprise, we ensure your IT infrastructure adapts seamlessly to your evolving needs.</p>
          </div>

          <div className="feature-card">
            <FaEye className="feature-icon" />
            <h3>Transparency</h3>
            <p>We believe in open communication and honest practices. From clear pricing to regular updates, you’ll always know exactly where your project stands.</p>
          </div>

          <div className="feature-card">
            <FaGlobe className="feature-icon" />
            <h3>Global Reach</h3>
            <p>With experience serving diverse clients worldwide, we understand global market needs and deliver solutions that meet international standards.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
