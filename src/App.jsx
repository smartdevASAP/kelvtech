import React from "react";
import { useAppContext } from "./context/appContext";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Pricing from "./components/pricing";
import Services from "./components/services";
import Footer from "./components/footer";
import Inspiration from "./components/inspiration";
import Testiminials from "./components/testiminials";

function App() {
  const { isMenuToggled, setIsMenuToggled } = useAppContext();
  return (
    <>
      <NavBar />
      <div
        onClick={() => setIsMenuToggled(false)}
        className="max-w-[80vw] mx-auto pt-4"
      >
        <Home />
        <About />
        <Services />
        <Pricing />
        <Inspiration />
        <Testiminials />
      </div>
      <Footer />
    </>
  );
}

export default App;
