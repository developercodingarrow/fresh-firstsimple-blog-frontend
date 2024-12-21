"use client";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [authDropDown, setauthDropDown] = useState(false);
  const [isfooterAuthPopUp, setisfooterAuthPopUp] = useState(false);
  const [isMobileSearchModel, setisMobileSearchModel] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handelOpenAuthDropDown = () => {
    setauthDropDown(!authDropDown);
  };

  const handelCloseAuthDropDown = () => {
    setauthDropDown(false);
  };

  const handelOpenFooterPopUp = () => {
    setisfooterAuthPopUp(!authDropDown);
  };

  const handelCloseFooterPopUp = () => {
    setisfooterAuthPopUp(!authDropDown);
  };

  const handelTogleMobileSearch = () => {
    setisMobileSearchModel(!isMobileSearchModel);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        toggleSidebar,
        isBtnLoadin,
        setisBtnLoadin,
        authDropDown,
        handelOpenAuthDropDown,
        handelCloseAuthDropDown,
        isMobileSearchModel,
        handelTogleMobileSearch,
        handelOpenFooterPopUp,
        handelCloseFooterPopUp,
        isfooterAuthPopUp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
