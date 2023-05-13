import { useState } from "react"
import { Navigate } from "react-router-dom"

const Welcome = () => {
    const [signInClick, setSignIn] = useState(false)
    const [signUpClick, setSignUp] = useState(false)

    const handleSignInClick = () => setSignIn(true)
    const handleSignUpClick = () => setSignUp(true)

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Hello</h1>
            </div>

            <div className="signin-container">
                <button className="signin-btn" onClick={handleSignInClick}>Sign In</button>
                <button className="signin-btn" onClick={handleSignUpClick}>Sign Up</button>
                {signInClick ? <Navigate to='/signin' /> : ''}
                {signUpClick ? <Navigate to='/signup' /> : ''}
            </div>
        </div>
    )
}

export default Welcome