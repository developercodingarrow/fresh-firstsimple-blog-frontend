"use client";
import { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({ children, authData }) {
  const [authUser, setauthUser] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setauthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
