import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/Aboutus/AboutUs";
import ContactUs from "./components/Contactus/ContactUs";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MobileDevelopment from './components/Services/sevicesPages/MobileDevelopment'
import OnDemandSolution from './components/Services/sevicesPages/OnDemandSolution'

import WebDevelopment from './components/Services/sevicesPages/WebDevelopment'
import HireDevelopment from './components/Services/sevicesPages/HireDevelopment'
import EcommerceDevelopment from './components/Services/sevicesPages/EcommerceDevelopment'


import Industries from "./components/Industries/Industries";
import Services from "./components/Services/Services";
import UiuxDev from './components/Services/sevicesPages/UiuxDev'
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/industries" element={<Industries />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/ui-ux-dev" element={<UiuxDev />}></Route>


          
          <Route path="/mobile-development" element={<MobileDevelopment />}></Route>
          <Route path="/on-demand-solution" element={<OnDemandSolution />}></Route>
          <Route path="/web-development" element={<WebDevelopment />}></Route>
          <Route path="/hire-development" element={<HireDevelopment />}></Route>
          <Route path="/e-commerce-development" element={<EcommerceDevelopment />}></Route>



   
      
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
