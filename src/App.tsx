import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Pages/MainLayout";
import Footerinfo from "./Pages/FooterPages";
import Investor from "./Pages/FooterPages/Investor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route
          path="/privacy-policy"
          element={<Footerinfo page="Privacy Policy" />}
        />

        <Route path="/disclaimer" element={<Footerinfo page="Disclaimer" />} />

        <Route
          path="/advisory-for-investors"
          element={<Footerinfo page="Advisory for Investors" />}
        />

        <Route path="/investor-information" element={<Investor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
