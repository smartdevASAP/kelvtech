import { useState, useContext, createContext } from "react";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  //ALL GLOBAL FUNCTIONS WILL BE SET HERE;
  const [isStarted, setIsStarted] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const value = {
    isMenuToggled,
    setIsMenuToggled,
    isStarted,
    setIsStarted,
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
