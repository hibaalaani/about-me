import React from "react";
import HeroImage from "../assets/main.gif";
import { Link, Element } from 'react-scroll';
import Contact from './Contact';
import Projects from "./Projects";
import About from "./About";


const LandingPage = () => {
  return (
    <div className="bg-gray-100">

<section className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 lg:p-16">
        {/* Left Column */}
        <div className="flex-1 flex justify-center p-5">
          <img 
            src={HeroImage} 
            alt="Portfolio Illustration" 
            className="w-full h-auto max-w-xs lg:max-w-md rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 text-left space-y-5 p-5 lg:mt-0 mt-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm Hiba Alaani
          </h1>
          <p className="text-lg md:text-xl font-medium">
            A passionate Web Developer & Designer who brings creativity to code.
          </p>
          <p className="text-base md:text-lg">
            I specialize in React, Node, Django, and modern web design principles. Check out my work and get in touch!
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white font-semibold py-3 px-8 rounded-lg shadow-lg">
              <Link to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <Element name="about">
        <section className="py-20 bg-white">
         
          <About />
        </section>
      </Element>

      {/* Portfolio Projects Section */}
      <Element name="portfolio">
        <section className="py-20 bg-gray-50">
         
          <div className="flex flex-wrap justify-center gap-8">
            <Projects />
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section className="py-20 bg-gray-100">
         
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <Contact />
          </div>
        </section>
      </Element>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-400 py-6 text-center">
       
        <div className="flex justify-center gap-4 mt-4">
           Example icons, replace with your social links 
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </footer> */}

    </div>
  );
};

export default LandingPage;
