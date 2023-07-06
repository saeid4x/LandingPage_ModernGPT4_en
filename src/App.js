import React from "react";

/**  import components  **/
import Brand from "./components/brand/brand";
import CTA from "./components/cta/CTA";
import Navbar from "./components/navbar/navbar";

/**  import components of container folder  **/
import Footer from "./containers/footer/footer";
import Blog from "./containers/blog/blog";
import Possibility from "./containers/possibility/possibility";

import WhatGPT4 from "./containers/whatGPT4/whatGPT4";
import Header from "./containers/header/header";
import "./App.css";
import Features from "./containers/features/features";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
