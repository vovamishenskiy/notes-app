import { Navigate } from "react-router-dom"
import { useState } from "react";

const SignUp = () => {
    const [signUpClick, setSignUpClick] = useState(false)

    return (
        <div className="signin-container">
            <h2>Hello, sign up to proceed</h2>
            <input placeholder="login"></input>
            <input placeholder="email" type='email'></input>
            <input placeholder="password" type='password'></input>
            <button onClick={() => setSignUpClick(true)} className="signin-btn">sign up</button>
            {signUpClick ? <Navigate to='/signin'></Navigate> : ''}
        </div >
    );
};

export default SignUp;