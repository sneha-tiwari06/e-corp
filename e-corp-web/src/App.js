import { HashRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/about";
import Home from "./components/home";
import Career from "./components/career";
import Testimonials from "./components/testimonials";
import ContactUs from "./components/contactUs";
import MyNewpage from "./components/my-new-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactUs" element={<ContactUs />} /> 
          <Route path="/my-new-page" element={<MyNewpage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
