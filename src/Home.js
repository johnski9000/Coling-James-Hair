import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import PriceSection from "./components/PriceSection";
import InstaFeeds from "./components/InstagramFeed";
import Footer from "./components/Footer";


function Home() {
  return (
    <div className="App">
      <NavBar/>
        <Banner/>
        <AboutSection/>
        <PriceSection/>
        <InstaFeeds/>
        <Footer/>
        <div className="copyright" style={{backgroundColor: "#045959", textAlign:"center", color:"#ffffff"}}>Copyright © 2023 Beauty Nails</div>
    </div>
  );
}

export default Home;
