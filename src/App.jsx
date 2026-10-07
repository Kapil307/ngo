import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Grant from "./pages/Grant";
import Initiatives from "./pages/Initiatives";
import Impact from "./pages/Impact";
import Events from "./pages/Events";
import NewsMedia from "./pages/NewsMedia";
import Donate from "./pages/donate";
import Volunteer from "./pages/Volunteer";
import PastEvents from "./pages/PastEvents"
import Involve from "./pages/Involve"
import "./styles/global.css"
import "./styles/variables.css"
import "./App.css"
export default function App() {
  return <BrowserRouter><Routes>
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
  </Routes></BrowserRouter>
}
