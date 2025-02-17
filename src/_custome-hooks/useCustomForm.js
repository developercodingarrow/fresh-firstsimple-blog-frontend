"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import HookInput from "../_components/elements/formelements/HookInput";
import HookRadioBtn from "../_components/elements/formelements/HookRadioBtn";
import HookTextarea from "../_components/elements/formelements/HookTextarea";

export default function useCustomForm() {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
    reset,
  } = useForm({
    mode: "all",
  });

  const renderInput = (input) => {
    let InputComponent, specificProps;
    switch (input.inputType) {
      case "text":
        InputComponent = HookInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
          inputSize: input.inputSize,
        };

        break;

      case "textarea":
        InputComponent = HookTextarea;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
          inputSize: input.inputSize,
        };

        break;
      case "radio":
        InputComponent = HookRadioBtn;
        specificProps = {
          radioOptions: input.options || [],
          onChange: (selectedOption) => setValue(input.name, selectedOption),
          selectedOption: watch(input.name),
          optionlable: input.optionlable,
          inputLabel: input.label,
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
        defaultValue=""
        rules={input.validation}
        render={({ field }) => (
          <>
            <InputComponent {...input} {...field} {...specificProps} />
          </>
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
    reset,
    renderInput,
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
