import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import PriceSection from "./components/PriceSection";
import InstaFeeds from "./components/InstagramFeed";
import Footer from "./components/Footer";
import Location from "./components/Location";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutSection />
      <PriceSection />
      {/* <InstaFeeds /> */}
      {/* <Location /> */}
      <Footer />
      <div
        className="copyright"
        style={{
          backgroundColor: "#61696c",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        Copyright © 2024 Colin James Hairdressing ltd
      </div>
    </div>
  );
}

export default Home;
