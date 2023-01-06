import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavScrollExample from "./components/navbar";
import About from "./pages/About";
import ContactUs from "./pages/Contact us";
import Axioss from "./pages/axios/axios";

function App() {
  return (
    <div>
     
 <BrowserRouter>
        <NavScrollExample/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="About" element={<About/>} />
          <Route path="Contact-us" element={<ContactUs />} />
          <Route path="Axioss" element={<Axioss/>} />
        </Routes>
      </BrowserRouter>
  
   </div>
  );
}

export default App;
