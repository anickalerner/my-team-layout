import React from 'react'
import logo from '../assets/img/myteam.png';
export default function AppHeader() {
    return (
        <div className="bg-light main-header full main-container">
            <div>
                <div className="logo"><img src={logo} alt="My team logo" /></div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            </div>
        </div>
    )
}
