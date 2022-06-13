import React, { useContext } from "react";
import useInput from "../utils/useInput";
import { v4 as uuidv4 } from "uuid";
import BusContext from "../store/busContext";
import { useNavigate } from "react-router-dom";
import classes from "./css/Register.module.css";
import { toast } from "react-toastify";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from "../utils/utils";
import { constent } from "../utils/Constents";

const Register = () => {
  const { user, setUser } = useContext(BusContext);
  const navigate = useNavigate();
  const {
    value: enteredName,
    isVaild: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => nameValidator(value));

  const {
    value: enteredEmail,
    isVaild: enteredEmailIsValid,
    hasError: emailInputHasError,
    reset: resetEmailInput,
    valueChangeHandler: eamilChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => emailValidator(value));

  const {
    value: enteredPassword,
    isVaild: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    reset: resetPasswordInput,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => passwordValidator(value));

  let formIsValid = true;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = false;
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClassName = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const passwordInputClassName = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    const id = uuidv4();
    let newUSer = {
      id,
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      booking: [],
    };

    const checkUser = user.find((user) => {
      return user.email === enteredEmail;
    });

    if (checkUser) {
      return toast.error(constent.user_exist);
    }

    setUser([...user, newUSer]);
    toast.success(constent.registered_success);
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify([...user, newUSer]));
      resetNameInput();
      resetEmailInput();
      resetPasswordInput();
      navigate("/");
    }, 1100);
  };

  return (
    <form className="form_login" onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <div className={classes.register_heading}>Register</div>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          placeholder="Enter Your Name"
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Password Contain atleast 3 Charecter</p>
      )}

      <div className={emailInputClassName}>
        <input
          type="email"
          id="email"
          onChange={eamilChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          placeholder="Enter Your Email"
        />
      </div>
      {emailInputHasError && <p className="error-text">Enter Valid Email</p>}
      <div className={passwordInputClassName}>
        <input
          type="password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
          placeholder="Enter Your Password"
        />
      </div>
      {passwordInputHasError && (
        <p className="error-text">Password Contain atleast 5 Charecter</p>
      )}
      <div className="form-actions">
        <button disabled={formIsValid}>Register User</button>
      </div>
    </form>
  );
};

export default Register;
