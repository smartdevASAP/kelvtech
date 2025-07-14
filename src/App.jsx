import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppContext } from "./context/appContext";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AppLayout from "./pages/appLayout";
import Login from "./pages/login";
import UserDashLayout from "./pages/userDashBoard/userDashLayout";

function App() {
  const { isMenuToggled, setIsMenuToggled } = useAppContext();

  return (
    <>
      <Routes>
        {/* Main Layout with Nav + Footer */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <div
                onClick={() => setIsMenuToggled(false)}
                className="max-w-[80vw] mx-auto pt-4"
              >
                <AppLayout />
              </div>
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            <div className=" pt-4">
              <Login />
            </div>
          }
        />

        {/* User Dashboard */}
        <Route
          path="/userdashboard"
          element={
            <div className="  pt-4">
              <UserDashLayout />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
