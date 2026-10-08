import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Grant from "./pages/Grant";
import Initiatives from "./pages/Initiatives";
import Impact from "./pages/Impact";
import Events from "./pages/Events";
import PastEvents from "./pages/PastEvents";
import NewsMedia from "./pages/NewsMedia";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Involve from "./pages/Involve";
import "./App.css";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grant" element={<Grant />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/news" element={<NewsMedia />} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/involve" element={<Involve />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;