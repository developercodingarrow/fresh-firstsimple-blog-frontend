"use client";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [authDropDown, setauthDropDown] = useState(false);
  const [isfooterAuthPopUp, setisfooterAuthPopUp] = useState(false);
  const [isMobileSearchModel, setisMobileSearchModel] = useState(false);
  const [isAppDrawer, setisAppDrawer] = useState(false);
  const [pageLoading, setpageLoading] = useState(false);
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

  const handelOpenAppDraer = () => {
    setisAppDrawer(true);
  };
  const handelCloseAppDraer = () => {
    setisAppDrawer(false);
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
        isAppDrawer,
        handelOpenAppDraer,
        handelCloseAppDraer,
        pageLoading,
        setpageLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
