import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AboutAlli from "./pages/AboutAlli.jsx"
import SupportUs from "./pages/SupportUs.jsx";
import Information from "./pages/InformationQualifiedPersonnel.jsx"
import Feedback from "./pages/Feedback.jsx"
import Contact from "./pages/Contact.jsx";
import Imprint from "./pages/Imprint.jsx"

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-alli" element={<AboutAlli />} />
        <Route path="/about" element={<About />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/for-doctors" element={<Information />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
