import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar/Navbar";
import AtvAdventuresCollections from "./sections/AtvAdventuresCollections";
import AtvDestinations from "./sections/AtvDestinations";
import Booking from "./sections/Booking";
import Hero from "./sections/Hero";
import WhatToDoInBicol from "./sections/WhatToDoInBicol";
import WhereToGo from "./sections/WhereToGo";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <AtvAdventuresCollections /> */}
      {/* <AtvDestinations /> */}
      <WhatToDoInBicol />
      <WhereToGo />
      <Booking />
      <Footer />
    </>
  );
};

export default Home;
