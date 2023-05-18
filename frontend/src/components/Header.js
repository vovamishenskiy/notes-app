import { useState } from "react"
import { Navigate } from "react-router-dom"
import { Popup } from "reactjs-popup"
import setting from '../img/setting.png'

const Header = ({ text }) => {
    const [logOutClick, setLogOut] = useState(false)
    const [isShownPopup, setIsShownPopup] = useState(false)

    const handleLogOutClick = () => setLogOut(true)

    return (
        <div className="header-container">
            <h1 className="header">{text}</h1>
            <Popup
                trigger={<button className="logout-btn"><img src={setting} alt="" className="settings-img"></img></button>}
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={0}
                mouseEnterDelay={0}
                arrow={false}
                keepTooltipInside=".header-container">
                <div className='settings-popup item-popup' >
                    <button onClick={handleLogOutClick} className="logout-btn">log out</button>
                </div>
            </Popup>

            {logOutClick ? <Navigate to='/welcome' /> : ''}
        </div>
    )
}

export default Header