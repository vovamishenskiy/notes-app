import { Navigate } from "react-router-dom"
import { useState } from "react";

const SignUp = () => {
    const [signUpClick, setSignUpClick] = useState(false)
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginChange = event => setLogin(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handlePasswordChange = event => setPassword(event.target.value)

    const handleSignUpClick = () => {
        if(login.trim().length === 0 || password.trim().length === 0 || email.trim().length === 0) 
            return alert('you need to enter something to proceed')
        setSignUpClick(true)
    }

    return (
        <div className="signin-container">
            <h2>Hello, sign up to proceed</h2>
            <input placeholder="login" onChange={handleLoginChange}></input>
            <input placeholder="email" type='email' onChange={handleEmailChange}></input>
            <input placeholder="password" type='password' onChange={handlePasswordChange}></input>
            <button onClick={handleSignUpClick} className="signin-btn">sign up</button>
            {signUpClick ? <Navigate to='/signin'></Navigate> : ''}
        </div >
    );
};

export default SignUp;