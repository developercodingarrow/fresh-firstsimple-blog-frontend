"use client";

import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; // Client-side cookies
import { API_BASE_URL } from "@/config";
import { featuredTagsListAction } from "../app/utils/tagActions";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [authDropDown, setauthDropDown] = useState(false);
  const [isfooterAuthPopUp, setisfooterAuthPopUp] = useState(false);
  const [isMobileSearchModel, setisMobileSearchModel] = useState(false);
  const [isAppDrawer, setisAppDrawer] = useState(false);
  const [pageLoading, setpageLoading] = useState(false);

  // Function to fetch and store featured tags in cookies
  const handelstoreFeatureTags = async () => {
    const existingTags = Cookies.get("featuredTags");
    if (existingTags) {
      console.log("Tags already stored in cookies");
      return;
    }
    try {
      const res = await featuredTagsListAction();
      console.log("feature tag api calli---", res);
      // Store tags in cookies for 24 hours
      Cookies.set("featuredTags", JSON.stringify(res), {
        expires: 1, // 1 day
        path: "/",
      });
    } catch (error) {
      console.log("error---");
    }
  };

  useEffect(() => {
    handelstoreFeatureTags();
  }, []);

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
