"use client";
import { createContext, useEffect, useRef, useState } from "react";
export const TagContext = createContext();

export default function TagContextProvider({ children, verifiedTags }) {
  const [trustedTags, settrustedTags] = useState(verifiedTags);

  return (
    <TagContext.Provider value={{ trustedTags }}>
      {children}
    </TagContext.Provider>
  );
}
