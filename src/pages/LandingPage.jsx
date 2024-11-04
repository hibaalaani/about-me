import React from "react";
import HeroImage from "../assets/main.gif";
import { Link, Element } from 'react-scroll';
import Register from './Register';
import Contact from './Contact';
import ProgrammingSessions from "./ProgrammingSessions ";
import { useAuth } from "../contexts/AuthContext";
import BookingForm from "./BookingForm";
const LandingPage = () => {
  const {isAuthenticated}  = useAuth()
  return (
    <div>

      {/* Hero Section */}
      <section className="flex items-center justify-between bg-gradient-to-r from-purple-800 to-blue-600 text-white min-h-screen p-10 shadow-lg p-8 lg:p-16"
               style={{ background: 'linear-gradient(45deg, #3b82f6, #9333ea)' }}>
        {/* Left Column */}
        <div className="flex-1 flex justify-center">
          <img 
            src={HeroImage} 
            alt="Programming Illustration" 
            className="w-3/4 h-3/4 lg:w-2/3 rounded-lg animate-pulse mix-blend-multiply" 
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Engaging Programming Classes for Kids!
          </h1>
          <p className="text-lg md:text-xl">
            A comprehensive course designed to introduce children to coding, with no prior experience needed.
          </p>  {!isAuthenticated &&( <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white font-semibold py-3 px-8 rounded-lg">
          
          <Link to="register" smooth={true} duration={500} className="cta-button">
            Register Now
          </Link>
        </button>) }
         
        </div>
      </section>
 {/* Sessions Section */}
 <Element name="sessions">
        <section className="p-10 bg-white min-h-screen" >
          {/* <h2 className="text-3xl font-semibold text-center mb-5">Available Programming Sessions</h2> */}
          <ProgrammingSessions />
        </section>
      </Element>

      {/* Booking Section */}
      <Element name="booking-form">
        <section className="p-10 bg-gray-100 min-h-screen">
          <h2 className="text-3xl font-semibold text-center mb-5">Book a free Session</h2>
          <BookingForm />
        </section>
      </Element>
     

     
      {/* Contact Section */}
      <Element name="contact">
        <section className="p-10 bg-gray-100 min-h-screen">
          {/* <h2 className="text-3xl font-semibold text-center mb-5">Contact Me</h2> */}
          <Contact />
        </section>
      </Element>

    </div>
  );
};

export default LandingPage;
