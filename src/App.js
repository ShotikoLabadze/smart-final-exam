import "./App.css";
import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import Homepage from "./components/homepage/Homepage";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/home/Home";
import Weather from "./components/weather/Weather";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Weather />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
