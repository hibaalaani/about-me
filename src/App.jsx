// App.js
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import EnrollInSession from "./pages/EnrollInSession ";
import ProgrammingSessions from "./pages/ProgrammingSessions ";
import SessionDetail from "./pages/SessionDetail";
import BookingForm from "./pages/BookingForm";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ParentDashboard from "./pages/ParentDashboard.jsx";
import SessionCatalog from "./pages/SessionCatalog.jsx";

function App() {
  return (
    <AuthProvider>
      <Router basename="/alaani">
        {/* <div className="App"> */}
        <Navbar />
        <div style={{paddingTop: "80px"}}>
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<LandingPage />} />
<Route path="/dashboard" element={<ParentDashboard />} />
{/* <Route path="/enroll" element={<SessionEnrollment />} /> */}
<Route path="/catalog" element={<SessionCatalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/program-session" element={<ProgrammingSessions />} />
            <Route path="/session/:sessionId" element={<SessionDetail />} />
            {/* <Route path="/enroll" element={<EnrollInSession />} /> */}
            <Route path="/booking-form" element={<BookingForm />} />
          </Routes>
          <Footer />{" "}
        </div>
        {/* </div> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
