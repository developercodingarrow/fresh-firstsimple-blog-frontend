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

  // ✅ Ensure form values are only updated when apiData actually changes
  useEffect(() => {
    reset(filteredData); // Instead of setValue, reset ensures all values update properly
  }, [apiData]); // ✅ Depend only on `apiData`, not `filteredData`

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
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
