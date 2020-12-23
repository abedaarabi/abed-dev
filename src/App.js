import React from "react";
import "./App.css";
import "./Utilities.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import StatSection from "./components/StatSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section />
      <StatSection />
      <Footer />
    </div>
  );
}

export default App;
