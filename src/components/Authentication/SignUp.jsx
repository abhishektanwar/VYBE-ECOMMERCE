import React, { useContext } from 'react'
import { AuthDialogContext } from '../../Contexts/AuthDialogContext'
import './authentication.css'
const SignUp = () => {
  const {setAuthType} = useContext(AuthDialogContext);
  return (
    <div class="auth-body">
		<div class="authentication-container flex-column">
			<h3 class="text-bold-weight">Signup</h3>
			<form action="">
				<div class="flex-column form-field-container">
					<label class="input-label required-field">Email Address</label>
					<input type="email" class="form-field" placeholder="username@xyz.com" required />
				</div>
				<div class="flex-column form-field-container">
					<label class="input-label ">Password</label>
					<input class="form-field" type="password" name="password" id="password"
						placeholder="Enter password" />
				</div>
				<div class="flex-row form-field-container flex-align-item-center"
					style={{justifyContent: 'space-between'}}>
					<label class="checkbox-container">I accept all Terms & Conditions
						<input type="checkbox" />
						<span class="checkmark"></span>
					</label>
				</div>
				<div class="card-action-btn-container">
					<button class="margin-trb-16 btn-filled-primary btn " >
						Create New Account
					</button>
          <button class="margin-trb-16 btn-filled-primary btn " onClick={()=>setAuthType('login')}>
          Already have an account ? &nbsp;<i
							class="fas fa-chevron-right"></i>
					</button>
					{/* <a class="typo-xs" href="./login.html">Already have an Account &nbsp;<i
							class="fas fa-chevron-right"></i></a> */}
				</div>
			</form>
		</div>
	</div>
  )
}

export default SignUp
