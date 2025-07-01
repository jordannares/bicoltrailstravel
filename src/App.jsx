import { Link, Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Navbar from "./layouts/navbar/Navbar";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import AtvTrails from "./pages/atvtrails";
import Pricing from "./pages/pricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/atvtrails" element={<AtvTrails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
