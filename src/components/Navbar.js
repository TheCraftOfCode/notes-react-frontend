import React from "react";
import "./navbar.css";
import { format } from "date-fns";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  date: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const email = localStorage.getItem("email");
  const user = email.substr(0, email.indexOf("@"));

  const handleSignOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    props.handlePage();
  };

  return (
    <div className="navWrapper">
      <AppBar
        position="fixed"
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <div className="navbarText">
            Hi&nbsp;<b>{user[0].toUpperCase() + user.slice(1)}</b>,&ensp; Today
            is the {format(new Date(), "do MMMM Y")}
          </div>
          <Typography className={classes.date}></Typography>
          <div className="navbar">
            <div onClick={props.handleModal} className="navbarNavItem">
              Create Note
            </div>
            <div onClick={handleSignOut} className="navbarNavItem">
              Sign Out
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
