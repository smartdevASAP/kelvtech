import { useState, useContext, createContext } from "react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
const baseURL = "http://localhost:4000";
axios.defaults.baseURL = baseURL;

const appContext = createContext();
export const AppContextProvider = ({ children }) => {
  //ALL GLOBAL FUNCTIONS WILL BE SET HERE;
  const [isStarted, setIsStarted] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  //USER CREDENTIALS SETTING;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  //CHECKING WHETHER USER IS STARTED;
  const isUserStarted = async () => {
    try {
      if (!isStarted) {
        toast.error("you should get started before getting plan");
        return;
      }
      const { data } = await axios.get("/api/home/register");
      console.log(data); // do something with response
    } catch (err) {
      console.error(err);
      toast.error("Failed to check user status");
    }
  };
  //SETTING THE USER REQUESTS FROM THE DROPDOWN MENU;
  //options,category,package,pages;
  const [options, setOptions] = useState("");
  const [categories, setCategories] = useState("");
  const [pricingPackage, setPricingPackage] = useState("");
  const [page, setPage] = useState("");
  //custom request handling;
  const [customRequest, setCustomRequest] = useState("");

  const value = {
    isMenuToggled,
    setIsMenuToggled,
    isStarted,
    setIsStarted,
    isUserStarted,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    user,
    setUser,
    options,
    setOptions,
    categories,
    setCategories,
    pricingPackage,
    setPricingPackage,
    page,
    setPage,
    customRequest,
    setCustomRequest,
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
