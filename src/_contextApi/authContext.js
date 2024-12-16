"use client";
import { createContext, useState } from "react";
import { genericDataHandler } from "../app/_generichandler/generichandler";
import { updateUser } from "../app/utils/userActions";

export const AuthContext = createContext();

export default function AuthContextProvider({ children, authData }) {
  const [authUser, setauthUser] = useState(authData);
  const handelUpdateUserProfile = genericDataHandler(updateUser);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setauthUser,
        handelUpdateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
