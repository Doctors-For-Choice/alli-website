import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About";
import AboutAlli from "./components/pages/AboutAlli"
import SupportUs from "./components/pages/SupportUs";
import Information from "./components/pages/InformationQualifiedPersonnel"
import Feedback from "./components/pages/Feedback"
import Contact from "./components/pages/Contact";
import Imprint from "./components/pages/Imprint";
import NotFound from "./components/pages/404";
// eslint-disable-next-line no-unused-vars
import i18n from "./utils/i18next.js"

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/about-alli" element={<AboutAlli />} />
                <Route path="/about" element={<About />} />
                <Route path="/support-us" element={<SupportUs />} />
                <Route path="/for-doctors" element={<Information />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route index path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App