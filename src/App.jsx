import { Link, Route, Routes } from "react-router-dom";

// import Navbar from "./layouts/navbar/Navbar";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import AtvTrails from "./pages/atvtrails";
// import Pricing from "./pages/pricing";
import Discover from "./pages/discover";
import WhatToExplore from "./pages/what-to-explore";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/atv-trails" element={<AtvTrails />} />
        <Route path="/what-to-explore" element={<WhatToExplore />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
