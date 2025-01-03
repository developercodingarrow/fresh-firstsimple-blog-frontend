"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import HookInput from "../_components/elements/formelements/HookInput";
import HookRadioBtn from "../_components/elements/formelements/HookRadioBtn";

export function useCustomApiForm(apiData = {}, inputFields = []) {
  // Extract only the relevant fields from apiData based on inputFields
  const filteredData = inputFields.reduce((acc, field) => {
    if (apiData[field.name] !== undefined) {
      acc[field.name] = apiData[field.name];
    }
    return acc;
  }, {});

  const { handleSubmit, formState, control, watch, setValue, reset } = useForm({
    mode: "all",
    defaultValues: filteredData,
  });

  useEffect(() => {
    if (filteredData) {
      Object.entries(filteredData).forEach(([name, value]) => {
        setValue(name, value);
      });
    }
  }, [filteredData, setValue]);

  const renderInput = (input, dynamicData) => {
    let InputComponent, specificProps;
    let defaultValues = filteredData[input.name];
    switch (input.inputType) {
      case "text":
        InputComponent = HookInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          defaultValue: defaultValues || "",
        };
        break;

      default:
        return null;
    }
    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        defaultValue={apiData[input.name]}
        rules={input.validation}
        render={({ field }) => (
          <InputComponent {...input} {...field} {...specificProps} />
        )}
      />
    );
  };

  return {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    reset,
  };
}
