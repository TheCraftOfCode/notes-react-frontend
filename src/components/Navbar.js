import React from "react";
import "./navbar.css";

function Navbar(props) {

  const email = localStorage.getItem("email")
  const user = email.substr(0,email.indexOf("@"))

  const handleSignOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    props.handlePage();
  };

  return (
    <div className="navWrapper">
      <div className="navbarText">Hi {user[0].toUpperCase() + user.slice(1)}</div>
      <div className="navbar">
      <div onClick={props.handleModal} className="navbarNavItem">Create Note</div>
      <div onClick={handleSignOut} className="navbarNavItem">Sign Out</div>
    </div>
    </div>
    
  );
}

export default Navbar;
