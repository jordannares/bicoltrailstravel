import Footer from "../../layouts/footer";
import AtvAdventuresCollections from "./sections/AtvAdventuresCollections";
import AtvDestinations from "./sections/AtvDestinations";
import Booking from "./sections/Booking";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <AtvAdventuresCollections />
      <AtvDestinations />
      <Booking />
      <Footer />
    </div>
  );
};

export default Home;
