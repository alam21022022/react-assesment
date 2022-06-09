import { useState } from "react";

function useInput(validate) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isVaild: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    hasError,
    reset,
  };
}

export default useInput;
