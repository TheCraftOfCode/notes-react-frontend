import React from "react";
import "./navbar.css";

function Navbar(props) {
<<<<<<< HEAD
  const handleSignOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    props.handlePage();
  };
  return (
    <div className="navbar">
      <div>Create Note</div>
      <div onClick={handleSignOut}>Sign Out</div>
    </div>
  );
=======

    const handleSignOut = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("token")
        props.handlePage()
    }
    return (
        <div className="navbar">
            <div onClick={props.handleModal}>Create Note</div>
            <div onClick={handleSignOut}>Sign Out</div>
        </div>
    )
>>>>>>> 49fe11dd8acc86717f49d2c703be270c4b64ea25
}

export default Navbar;
