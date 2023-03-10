import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { Parallax } from "react-scroll-parallax";
import AboutSection from "./components/AboutSection";
import PriceSection from "./components/PriceSection";
import InstaFeeds from "./components/InstagramFeed";


function App() {
  return (
    <div className="App">
      <NavBar/>
        <Banner/>
      <AboutSection/>
      <PriceSection/>
      <InstaFeeds/>
    </div>
  );
}

export default App;
