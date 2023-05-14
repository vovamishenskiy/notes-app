import { useState } from "react"
import { Navigate } from "react-router-dom"

const Header = ({ text }) => {
    const [logOutClick, setLogOut] = useState(false)

    const handleLogOutClick = () => setLogOut(true)

    return (
        <div className="header-container">
            <h1 className="header">{text}</h1>
            {/* <button><img></img></button> todo: settings/logout button with icon */}
            <button onClick={handleLogOutClick}>log out</button>
            {logOutClick ? <Navigate to='/welcome' /> : ''}
        </div>
    )
}

export default Header