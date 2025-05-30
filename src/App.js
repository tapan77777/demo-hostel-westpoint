import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExploreUs from "./pages/Explore";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      {/* Floating WhatsApp Button */}
<a
  href="tel:+918327823438"  
  className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-105 transition"
  target="_blank"
  rel="noopener noreferrer"
  title="Chat on WhatsApp"
>
  <img
    src="images\whatsapp.png" 
    alt="WhatsApp"
    className="w-6 h-6"
  />
</a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path = "/explore" element = {<ExploreUs />} />
        <Route path = "/gallery" element = {<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
