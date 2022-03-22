import React, { useContext, useState } from "react";
import { AuthDialogContext } from "../../Contexts/AuthDialogContext";
import Button from "../Header/Button";
import InputField from "../InputField";
import "./authentication.css";
const Login = () => {
  const { setAuthType } = useContext(AuthDialogContext);
  const [creds, setCreds] = useState({});

  const handleInputData = (e) => {
    setCreds((cr) => ({ ...cr, [e.target.name]: e.target.value }));
  };
  return (
    <div class="auth-body">
      <div class="authentication-container flex-column">
        <h3 class="text-bold-weight">Login</h3>
        <form action="">
          <InputField
            type="email"
            name="password"
            labelClass="required-field"
            id="password"
            placeholder="username@xyz.com"
            labelText="Email Address"
            value=""
            onChange={() => {}}
            required
          />
          <InputField
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            labelText="Password"
            value=""
            onChange={() => {}}
          />
          <div
            class="flex-row form-field-container flex-align-item-center"
            style={{ justifyContent: "space-between" }}
          >
            <label class="checkbox-container">
              Remember me
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <a class="body-typo-md forgot-your-pass" href="#">
              Forgot your password?
            </a>
          </div>
          <div class="card-action-btn-container flex-column">
            <Button buttonText="Login" onClick={() => {}} />
            <Button
              buttonText="Create new account"
              buttonStyle="secondary-button"
              // icon="fas fa-chevron-right"
              onClick={() => setAuthType("signup")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
