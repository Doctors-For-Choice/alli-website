import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutAlli from "./pages/AboutAlli"
import SupportUs from "./pages/SupportUs";
import Information from "./pages/InformationQualifiedPersonnel"
import Feedback from "./pages/Feedback"
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint"

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
