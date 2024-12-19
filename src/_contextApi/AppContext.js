"use client";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [authDropDown, setauthDropDown] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handelOpenAuthDropDown = () => {
    setauthDropDown(!authDropDown);
  };

  const handelCloseAuthDropDown = () => {
    setauthDropDown(false);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
