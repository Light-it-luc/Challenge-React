import { Dispatch, SetStateAction, useState } from "react";

export interface Validation {
  validator: (value: string) => boolean;
  error: string;
}

interface useInputReturn {
  value: string;
  setValue: Dispatch<string>;
  error: string;
}

export const useFormInput = (validations: Validation[]): useInputReturn => {
  const [value, setValue] = useState("");
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const validateAndPopulateError = (inputValue: string) => {
    if (!inputValue) {
      setInputErrorMessage("");
      return;
    }

    let allValidationsPassed = true;
    for (const { validator, error } of validations) {
      const validationPassed = validator(inputValue);

      if (validationPassed) continue;

      setInputErrorMessage(error);
      allValidationsPassed = false;
      break;
    }

    if (allValidationsPassed) setInputErrorMessage("");
  };

  const setValueAndValidate: Dispatch<string> = (value: string) => {
    setValue(value);
    validateAndPopulateError(value);
  };

  return { value, setValue: setValueAndValidate, error: inputErrorMessage };
};
