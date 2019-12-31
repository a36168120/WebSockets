import React from "react";
import Home_logo from "../../assets/img/brofist.png";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <img src={Home_logo} alt="logo" className={classes.logo} />
      <h1>The beginning of everything</h1>
    </div>
  );
};

export default withStyles(styles)(Home);
