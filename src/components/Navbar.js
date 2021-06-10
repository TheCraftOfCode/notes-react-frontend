import React from 'react'
import "./navbar.css"

function Navbar(props) {

    const handleSignOut = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("token")
        props.handlePage()
    }
    return (
        <div className="navbar">
            <div>Create Note</div>
            <div onClick={handleSignOut}>Sign Out</div>
        </div>
    )
}

export default Navbar
