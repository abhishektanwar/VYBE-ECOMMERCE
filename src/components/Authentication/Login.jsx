import React, { useContext, useState } from 'react'
import { AuthDialogContext } from '../../Contexts/AuthDialogContext'
import './authentication.css'
const Login = () => {
  const {setAuthType} = useContext(AuthDialogContext);
  const [creds,setCreds] = useState({})

  const handleInputData = (e) => {
    setCreds(cr=>({...cr,[e.target.name]:e.target.value}))
  }
  return (
    <div class="auth-body">
		<div class="authentication-container flex-column">
			<h3 class="text-bold-weight">Login</h3>
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
					<label class="checkbox-container">Remember me
						<input type="checkbox" />
						<span class="checkmark"></span>
					</label>
					<a class="body-typo-md forgot-your-pass" href="#">Forgot your password?</a>
				</div>
				<div class="card-action-btn-container">
					<button class="margin-trb-16 btn-filled-primary btn ">
						Login
					</button>
          <button class="margin-trb-16 btn-filled-primary btn " onClick={()=>setAuthType('signup')}>
          Create New Account &nbsp;<i
							class="fas fa-chevron-right"></i>
					</button>
					{/* <a class="typo-xs" href="./signup.html">Create New Account &nbsp;<i
							class="fas fa-chevron-right"></i></a> */}
				</div>
			</form>
		</div>
	</div>
  )
}

export default Login
