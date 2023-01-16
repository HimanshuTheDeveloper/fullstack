
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
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
              <Route class="nav-link active" path="/services" element={<Home />}>Services</Route>
            {/* </Route> */}
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
