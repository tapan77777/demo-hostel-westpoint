import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExploreUs from "./pages/Explore";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
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
