import React from "react";
import Header from "./components";
import Brand from "./components";
import Navbar from "./components";
import CTA from "./components";
import Footer from "./components";
import Blog from "./components";
import Possibility from "./components";
import Features from "./components";
import WhatGPT3 from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  </div>
);

export default App;
