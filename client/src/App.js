import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
// import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import Notification from "./components/Notification/Notification";
import VisionMission from "./components/VisionMission/VisionMission";
import Headline from "./components/Header/Headline";
import Donate from "./components/Registration/Donate";
import VolunteerRegistration from "./components/Registration/VolunteerRegistration";
import CoreTeam from "./components/Team/CoreTeam";
import CoreProfileCard from "./components/Team/CoreProfileCard";

const App = () => {
  return (
    <>
      <Router>
        <Headline />
        <Header />
        <Notification />
        <RoutesWithTitles />
        <Footer />
      </Router>
    </>
  );
};

const RoutesWithTitles = () => {
  const location = useLocation();

  useEffect(() => {
    updateTitle(getPageName(location.pathname));
  }, [location]);

  const getPageName = (pathname) => {
    // Extract the page name from the pathname
    const pathParts = pathname.split("/");
    const pageName = pathParts[pathParts.length - 1];
    return pageName;
  };

  const updateTitle = (pageName) => {
    document.title = `${pageName} | Unity of Youth`;
  };

  return (
    <Routes>
      <Route exact="true" path="/" element={<Homepage />} />
      {/* <Route exact="true" path="/Gallery" element={<Gallery />} /> */}
      <Route exact="true" path="/AboutUs" element={<AboutUs />} />
      <Route exact="true" path="/ContactUs" element={<ContactUs />} />
      <Route exact="true" path="/VisionMission" element={<VisionMission />} />
      <Route exact="true" path="/Donate" element={<Donate />} />
      <Route exact="true" path="/VolunteerRegistration" element={<VolunteerRegistration />} />
      <Route exact="true" path="/CoreTeam" element={<CoreTeam />} />
      <Route exact="true" path="/CoreProfileCard" element={<CoreProfileCard />} />
    </Routes>
  );
};

export default App;
