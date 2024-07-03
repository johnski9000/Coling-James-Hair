import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
export default App;
