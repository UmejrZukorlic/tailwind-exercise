import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./components/Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./components/Pages/ContactPage";
import AboutPage from "./components/Pages/AboutPage";
import StanoviPage from "./components/Pages/StanoviPage";
import UlaziPage from "./components/Pages/UlaziPage";
import UlazStanSelectPage from "./components/Pages/UlazStanSelectPage";
import Context from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/stanovi" element={<StanoviPage />} />
          <Route path="/ulazi" element={<UlaziPage />} />
          <Route path="/ulazi/select-stan" element={<UlazStanSelectPage />} />
        </Routes>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
