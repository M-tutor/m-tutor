import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from "./pages/homepage";
import ContactPage from "./pages/contactpage";
import AboutPage from "./pages/aboutpage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/contactpage" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
