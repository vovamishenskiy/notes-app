import { Navigate } from "react-router-dom"
import { useState } from "react"

const SignIn = () => {
  const [signInClick, setSignInClick] = useState(false)
  const [signUpClick, setSignUpClick] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginChange = event => setLogin(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)

  const handleLoginClick = () => {
    if(login.trim().length === 0 || password.trim().length === 0) return alert('enter your login or password')
    setSignInClick(true)
  }

  const handleSignUpClick = () => setSignUpClick(true)

  return (
    <div className="signin-container">
      <h2>Hello, sign in to proceed</h2>
      <input placeholder="email" onChange={handleLoginChange} type="email"></input>
      <input placeholder="password" type='password' onChange={handlePasswordChange}></input>
      <button className="signin-btn" onClick={handleLoginClick}>login</button>
      <h4 style={{margin: '0.4em 0'}}>or</h4>
      <button className="signin-btn" onClick={handleSignUpClick}>sign up</button>
      {signInClick ? <Navigate to='/notes' /> : ''}
      {signUpClick ? <Navigate to='/signup' /> : ''}
    </div>
  );
};

export default SignIn;