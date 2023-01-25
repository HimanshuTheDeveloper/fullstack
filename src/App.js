
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Services from "./Pages/Services";
// import './App.css';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
            {/* <Route  path="/" element={<Home />}>  */}
              <Route class="nav-link active"  path="/" element={<Home />}>Home</Route>
              <Route class="nav-link active" path="/about" element={<About />}>About</Route>
              <Route class="nav-link active" path="/resume" element={<Resume />}>Resume</Route>
              <Route  class="nav-link active" path="/projects" element={<Home />}>Projects</Route>
              <Route class="nav-link active" path="/services" element={<Services />}>Services</Route>
              <Route class="nav-link active" path="/portfolio" element={<Portfolio />}>portfolio</Route>
            {/* </Route> */}
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
