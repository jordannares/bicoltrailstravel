import { Link, Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
