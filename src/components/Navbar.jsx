import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

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

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Links for Desktop */}
      <ul className="hidden md:flex space-x-6">
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
            <RouterLink to="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </RouterLink>
          </li>
        )}
      </ul>

      {/* Links for Mobile */}
      {isNavOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-5">
          <ul className="flex flex-col space-y-4">
            <li>
              <RouterLink to="projects" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsNavOpen(false)}>
                Projects
              </RouterLink>
            </li>
            <li>
              <RouterLink to="experience" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsNavOpen(false)}>
                Experience
              </RouterLink>
            </li>
            <li>
              <RouterLink to="about" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsNavOpen(false)}>
                About
              </RouterLink>
            </li>
            {isLandingPage ? (
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsNavOpen(false)}>
                  Contact
                </ScrollLink>
              </li>
            ) : (
              <li>
                <RouterLink to="/contact" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsNavOpen(false)}>
                  Contact
                </RouterLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
