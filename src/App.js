import "./App.css";
import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import Homepage from "./components/homepage/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
