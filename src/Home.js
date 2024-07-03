import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import PriceSection from "./components/PriceSection";
import InstaFeeds from "./components/InstagramFeed";
import Footer from "./components/Footer";
import Location from "./components/Location";
import { useRef } from "react";

function Home() {
  const aboutRef = useRef(null);
  const priceRef = useRef(null);
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <NavBar
        handleScroll={handleScroll}
        aboutRef={aboutRef}
        priceRef={priceRef}
      />
      <Banner />
      <div ref={aboutRef}>
        {" "}
        <AboutSection />
      </div>

      <div ref={priceRef}>
        <PriceSection />
      </div>
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
      <div
        className="copyright"
        style={{
          backgroundColor: "#61696c",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        Powered by{" "}
        <a
          href="https://jw-digital.co.uk/"
          style={{ color: "white", fontWeight: "bold" }}
        >
          JW Digital
        </a>
      </div>
    </div>
  );
}

export default Home;
