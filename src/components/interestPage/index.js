import React, { Component } from "react";
import { useStyles } from "./styles.js";
import avatar from "../../assets/avatar.jpeg";

const InterestPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>Interests</div>
        <div className={classes.content}>
          Buffalo t-bone chuck ham hock. Hamburger strip steak rump, filet
          mignon buffalo prosciutto burgdoggen shank leberkas. Capicola tail
          beef ribs buffalo bacon brisket t-bone ball tip sausage short loin.
          Ground round tri-tip spare ribs, drumstick swine short loin hamburger
          beef ribs turkey chuck ham hock capicola pancetta short ribs
          landjaeger.
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
