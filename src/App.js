import "./App.css";
import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import Homepage from "./components/homepage/Homepage";
import NotFound from "./components/notFound/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
