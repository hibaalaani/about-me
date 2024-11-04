import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  const isLandingPage = location.pathname === "/";

  // Logout handler
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-gray-800 shadow-md fixed w-full z-10">
      <div className="text-2xl font-bold text-white">
        <RouterLink to="/">My Portfolio</RouterLink>
      </div>
      <ul className="flex space-x-6">
        <li>
          <RouterLink to="projects" className="text-white hover:text-blue-400 transition-colors">
            Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink to="experience" className="text-white hover:text-blue-400 transition-colors">
            Experience
          </RouterLink>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <RouterLink to="/dashboard" className="text-white hover:text-blue-400 transition-colors">
                Dashboard
              </RouterLink>
            </li>
            {isLandingPage?(  <li>
              <ScrollLink to="booking-form"  smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors">
                Book a session
              </ScrollLink>
            </li>): <li>
              <RouterLink to="/booking-form" className="text-white hover:text-blue-400 transition-colors">
                Book a session
              </RouterLink>
            </li> }
          
            {isLandingPage ? (
              <li>
                <ScrollLink to="sessions" smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors">
                  Sessions
                </ScrollLink>
              </li>
            ) : (
              <li>
                <RouterLink to="/program-session" className="text-white hover:text-blue-400 transition-colors">
                  Sessions
                </RouterLink>
              </li>
            )}
            <li>
              <button onClick={handleLogout} className="text-white hover:text-blue-400 transition-colors">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <RouterLink to="login" className="text-white hover:text-blue-400 transition-colors">
                Login
              </RouterLink>
            </li>
            <li>
              <RouterLink to="register" className="text-white hover:text-blue-400 transition-colors">
                Sign Up
              </RouterLink>
            </li>
          </>
        )}

        <li>
          <RouterLink to="about" className="text-white hover:text-blue-400 transition-colors">
            About
          </RouterLink>
        </li>

        {isLandingPage ? (
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors">
              Contact
            </ScrollLink>
          </li>
        ) : (
          <li>
            <RouterLink to="/contact" className="text-white hover:text-blue-400 transition-colors" /* onClick={() => window.scrollTo(0, document.getElementById("contact").offsetTop)} */>
              Contact
            </RouterLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;