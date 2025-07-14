import React from "react";
import Home from "../components/home";
import About from "../components/about";
import Services from "../components/services";
import Pricing from "../components/pricing";
import Inspiration from "../components/inspiration";
import Testiminials from "../components/testiminials";
function AppLayout() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Pricing />
      <Inspiration />
      <Testiminials />
    </div>
  );
}

export default AppLayout;
