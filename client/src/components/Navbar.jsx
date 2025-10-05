import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <header className={`header ${menuActive ? "active" : ""}`}>
      <NavLink to="/">
        <img src="/images/mylogo.avif" alt="my logo img" className="logo" />
      </NavLink>

      <nav className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => 
                `navbar-link home-link ${isActive ? "active" : ""}`
              }
              
              onClick={() => setMenuActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => 
              `navbar-link about-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuActive(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) => `navbar-link service-link ${isActive ? "active" : ""}`}
              onClick={() => setMenuActive(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => `navbar-link portfolio-link ${isActive ? "active" : ""}`}
              onClick={() => setMenuActive(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `navbar-link contact-link ${isActive ? "active" : ""}`}
              onClick={() => setMenuActive(false)}
            >
              Contact
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => `navbar-link logout-link ${isActive ? "active" : ""}`}
                onClick={() => setMenuActive(false)}
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => `navbar-link register-link ${isActive}`}
                  onClick={() => setMenuActive(false)}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => `navbar-link login-link ${isActive ? "active" : ""}`}
                  onClick={() => setMenuActive(false)}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Mobile menu button */}
      <div className="mobile-navbar-btn" onClick={toggleMenu}>
           <ion-icon
            name="menu-outline"
            className={`mobile-nav-icon ${!menuActive ? "active" : ""}`}
          />
          <ion-icon
            name="close-outline"
            className={`mobile-nav-icon ${menuActive ? "active" : ""}`}
          />

      </div>
    </header>
  );
};
