import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/Aboutus/AboutUs";
import ContactUs from "./components/Contactus/ContactUs";
import ITConsultingAndStrategy from "./components/Services/ITConsultingAndStrategy";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import SoftwareDevelopmentAndIntegration from "./components/Services/SoftwareDevelopmentAndIntegration";
import CloudSolutionsAndMigration from "./components/Services/CloudSolutionsAndMigration";
import CybersecurityAndDataProtection from "./components/Services/CybersecurityAndDataProtection";
import ITSupportAndHelpdeskServices from "./components/Services/ITSupportAndHelpdeskServices";
import NetworkInfrastructureSetupAndManagement from "./components/Services/NetworkInfrastructureSetupAndManagement";
import DataAnalyticsAndBusinessIntelligence from "./components/Services/DataAnalyticsAndBusinessIntelligence";
import BusinessProcessAutomation from "./components/Services/BusinessProcessAutomation";
import Industries from "./components/Industries/Industries";
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

          <Route
            path="/it-consulting-and-strategy"
            element={<ITConsultingAndStrategy />}
          ></Route>
          <Route
            path="/software-development-and-integration"
            element={<SoftwareDevelopmentAndIntegration />}
          ></Route>
          <Route
            path="/cloud-solutions-and-migration"
            element={<CloudSolutionsAndMigration />}
          ></Route>
          <Route
            path="/cybersecurity-and-data-protection"
            element={<CybersecurityAndDataProtection />}
          ></Route>
          <Route
            path="/it-support-and-helpdesk"
            element={<ITSupportAndHelpdeskServices />}
          ></Route>
          <Route
            path="/network-infrastructure-setup-and-management"
            element={<NetworkInfrastructureSetupAndManagement />}
          ></Route>
          <Route
            path="/data-analytics-and-business-intelligence"
            element={<DataAnalyticsAndBusinessIntelligence />}
          ></Route>
          <Route
            path="/business-process-automation"
            element={<BusinessProcessAutomation />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
