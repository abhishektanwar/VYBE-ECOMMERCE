import React, { useContext } from "react";
import { AuthDialogContext } from "../../Contexts/AuthDialogContext";
import Button from "../Header/Button";
import InputField from "../InputField";
import "./authentication.css";
const SignUp = () => {
  const { setAuthType } = useContext(AuthDialogContext);
  return (
    <div class="auth-body">
      <div class="authentication-container flex-column">
        <h3 class="text-bold-weight">Signup</h3>
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
          <InputField
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter password"
            labelText="Confirm Password"
            value=""
            onChange={() => {}}
          />
          <div
            class="flex-row form-field-container flex-align-item-center"
            style={{ justifyContent: "space-between" }}
          >
            <label class="checkbox-container">
              I accept all Terms & Conditions
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="card-action-btn-container flex-column">
            <Button buttonText="Login" onClick={() => {}} />
            <Button
              buttonText="Already have an account ?"
              buttonStyle="secondary-button"
              // icon="fas fa-chevron-right"
              onClick={() => setAuthType("login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
