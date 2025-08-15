import { NavLink } from "react-router-dom";
// import "./Navbar.css";
import { useAuth } from "../store/auth";
import "../index.css";


export const Navbar = () => {
    const { isLoggedIn } = useAuth();
   return (
    <>
        <header className="header">
                <div className="logo-brand">
                    <a href="/"><img src="/images/mylogo.avif" alt="my logo img" /></a>
                </div>

                <nav className="navbar">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {
                            isLoggedIn ?  <li><NavLink to="/logout">Logout</NavLink></li>
                         :  <>
                               <li><NavLink to="/register">Register</NavLink></li>
                               <li><NavLink to="/login">Login</NavLink></li>
                            </>
                        }
                    </ul>
                </nav>
        </header>
    </>
   );
};
