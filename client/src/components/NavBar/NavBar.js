import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const NavBar = ({ classes }) => (
  <div className={classes.navBar}>
    <Link to="/" className={classes.navLinks}>
      Home
    </Link>
    <Link to="/input" className={classes.navLinks}>
      Input
    </Link>
    <Link to="/output" className={classes.navLinks}>
      Output
    </Link>
  </div>
);

export default withStyles(styles)(NavBar);
