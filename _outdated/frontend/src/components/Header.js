import { useState } from "react"
import { Navigate } from "react-router-dom"
import { Popup } from "reactjs-popup"
import setting from '../img/setting.png'

const Header = ({ text }) => {
    const [homeClick, setHomeClick] = useState(false)
    const [archiveClick, setArchiveClick] = useState(false)
    const [binClick, setBinClick] = useState(false)
    const [settingsClick, setSettingsClick] = useState(false)

    const [logOutClick, setLogOut] = useState(false)
    const [isShownPopup, setIsShownPopup] = useState(false)

    const handleLogOutClick = () => setLogOut(true)

    const handleHomeClick = () => setHomeClick(true)
    const handleArchiveClick = () => setArchiveClick(true)
    const handleBinClick = () => setBinClick(true)
    const handleSettingsClick = () => setSettingsClick(true)

    return (
        <div className="header-container left-column">
            <h1 className="header">{text}</h1>
            <button className="column-btn" onClick={handleHomeClick}>
                <img src={setting} alt="" className="icon-img"></img>
                <span className="btn-text">Home</span>
            </button>
            <button className="column-btn" onClick={handleArchiveClick}>
                <img src={setting} alt="" className="icon-img"></img>
                <span className="btn-text">Archive</span>
            </button>
            <button className="column-btn" onClick={handleBinClick}>
                <img src={setting} alt="" className="icon-img"></img>
                <span className="btn-text">Bin</span>
            </button>
            <button className="column-btn" onClick={handleSettingsClick}>
                <img src={setting} alt="" className="icon-img"></img>
                <span className="btn-text">Settings</span>
            </button>

            {homeClick && window.location.href !== '/notes' ? <Navigate to='/notes' /> : ''}
            {archiveClick && window.location.href !== '/archive' ? <Navigate to='/archive' /> : ''}
            {binClick && window.location.href !== '/bin' ? <Navigate to='/bin' /> : ''}
            {settingsClick && window.location.href !== '/settings' ? <Navigate to='/settings' /> : ''}

            {/* <Popup
                trigger={<button className="logout-btn"><img src={setting} alt="" className="settings-img"></img>Settings</button>}
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={0}
                mouseEnterDelay={0}
                arrow={false}
                keepTooltipInside=".header-container">
                <div className='settings-popup item-popup' >
                    <button onClick={handleLogOutClick} className="logout-btn">log out</button>
                </div>
            </Popup> */}

            {/* {logOutClick ? <Navigate to='/welcome' /> : ''} */}
        </div>
    )
}

export default Header