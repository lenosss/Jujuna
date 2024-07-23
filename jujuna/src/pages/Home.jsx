import AboutUs from "../components/AboutUs";
import Bottle from "../components/Bottle";
import Cocktails from "../components/Cocktails";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/First";
import MobileBar from "../components/MobileBar";
import News from "../components/News";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="bg-[#eaeaea] dark:bg-[#000]">
      <Nav />
      <HeroSection />
      <AboutUs />
      <News />
      <Bottle />
      <Cocktails />

      <MobileBar />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
