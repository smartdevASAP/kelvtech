import React from "react";
import { obj } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

function Login() {
  const {
    isStarted,
    setIsStarted,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    user,
    setUser,
  } = useAppContext();
  const navigate = useNavigate();

  const allFieldsFilled = isStarted
    ? email && password
    : username && email && password;

  const handleSubmit = async (e) => {
    if (!allFieldsFilled) {
      toast.error("Please fill in all fields!");
      return;
    }
    console.log({ username, email, password });
    try {
      //connect data to backend;
      //if the user is getting started:-registering a user
      if (!isStarted) {
        const { data } = await axios.post("/api/home/register", {
          username,
          email,
          password,
        });
        //if succesful
        if (data.success) {
          setUser(data.user);
          //ERROR MAY ARISE
          navigate("/userdashboard");
        } else {
          toast.error(data.message);
          //toast.error("an error has occured")
        }
      }
      //when the user is started;
      else {
        const { data } = await axios.post("/api/home/login", {
          email,
          password,
        });
        if (data.success) {
          setUser(data.user);
          navigate("/userdashboard");
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error("invalid password entered");
    }
    //navigate("/userdashboard");
  };

  return (
    <div className="p-6">
      <Toaster position="top-center" />
      <Link to="/">
        <img src={obj.logo} alt="KevTech Logo" />
      </Link>

      <div className="space-y-8 mt-6 md:flex justify-between">
        <div className="md:w-[590px]">
          <h1 className="mb-8 mt-8 font-bold text-3xl md:text-4xl text-gray-600">
            {isStarted ? "Welcome Back 👋" : "Get Started with us."}
          </h1>

          {!isStarted && (
            <>
              <p className="text-gray-700 text-sm">Username</p>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="w-full mt-2 border-gray-200  p-2 rounded-full border"
                type="text"
                placeholder="username"
              />
            </>
          )}

          <p className="text-gray-700 mt-4 text-sm">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full mt-2 border-gray-200  p-2 rounded-full border"
            type="email"
            placeholder="you@example.com"
          />

          <p className="text-gray-700 mt-4 text-sm">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full mt-2 border-gray-200  p-2 rounded-full border"
            type="password"
            placeholder="*****"
          />

          <button
            onClick={handleSubmit}
            className={`w-full p-2 mt-4 mb-2 md:p-4 rounded-sm text-white ${
              allFieldsFilled
                ? "bg-primary"
                : "bg-indigo-400 cursor-not-allowed"
            } text-center`}
          >
            {isStarted ? "Log In" : "Get Started"}
          </button>

          <small className="text-gray-600">
            {isStarted ? "You have not started? " : "Already started? "}
            <span
              className="text-primary cursor-pointer underline"
              onClick={() => setIsStarted(!isStarted)}
            >
              Click here
            </span>
          </small>
        </div>

        <img
          className="order-1 sm:order-2 md:h-108 lg:h-120 mr-24"
          src={obj.login}
          alt="Login visual"
        />
      </div>
    </div>
  );
}

export default Login;
