"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const InputModelsContext = createContext();

export default function InputModelContextProvider({ children }) {
  const [modelInputFild, setmodelInputFild] = useState([]);
  const [modelApiData, setmodelApiData] = useState(null);
  const [elementId, setelementId] = useState("");
  const [modelHeading, setmodelHeading] = useState("");
  const [actionHandler, setActionHandler] = useState(null);
  const [isOpenInputModel, setisOpenInputModel] = useState(false);

  const handelOpenInputModel = (heading, data, id, fields, handler) => {
    console.log(data);
    setmodelHeading(heading);
    setmodelApiData(data);
    setelementId(id);
    setmodelInputFild(fields);
    setActionHandler(() => handler);
    setisOpenInputModel(true);
  };

  // Input Model Close
  const handelcloseInputModal = () => {
    setisOpenInputModel(false);
  };
  return (
    <InputModelsContext.Provider
      value={{
        handelOpenInputModel,
        handelcloseInputModal,
        isOpenInputModel,
        modelHeading,
        modelInputFild,
        actionHandler,
        modelApiData,
        elementId,
      }}
    >
      {children}
    </InputModelsContext.Provider>
  );
}
