import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [menuActive, setMenuActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuActive(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <header className={`header ${menuActive ? "active" : ""}`}>
      {/* Logo */}
      <NavLink to="/">
        <img src="/images/mylogo.avif" alt="my logo img" className="logo" />
      </NavLink>

      {/* Navbar Links */}
      <nav className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar-link home-link ${isActive ? "active" : ""}`
              }
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
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `navbar-link service-link ${isActive ? "active" : ""}`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `navbar-link portfolio-link ${isActive ? "active" : ""}`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navbar-link contact-link ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>

          {/* Auth Links */}
          {isLoggedIn ? (
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  `navbar-link logout-link ${isActive ? "active" : ""}`
                }
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `navbar-link register-link ${isActive ? "active" : ""}`
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `navbar-link login-link ${isActive ? "active" : ""}`
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
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
