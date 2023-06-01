import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Error404 from "./pages/Error404";
import { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Router() {
  // Get the location page
  const currentLocation = useLocation();
  // keep location page to rend footer and underline nav link
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);
  return (
    <>
      <Header location={location} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/property/:id" element={<Property />} />
        <Route exact path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
      {location && location.pathname !== "/404" && <Footer />}
    </>
  );
}
