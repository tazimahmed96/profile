import React, { Component } from "react";
import { useStyles } from "./styles.js";
import avatar from "../../assets/avatar.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";

const Page = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span id="firstName">Tazim</span>
        <span id="lastName">Ahmed</span>
      </div>
      <div className={classes.contactInfo}>
        <span id="address">2611 Bengali Rd</span>
        <span id="phoneNumber">647-XXX-XXX</span>
        <span id="email">XX.XXX@gmail.com</span>
      </div>
      <div className={classes.bio}>
        Mechanical Engineer Graduate, Result Driven, Passionate for
        problem-solving, challenges with innovative ideas.
      </div>
      <div className={classes.contactFooter}>
        <span title="linkedIn">
          <LinkedInIcon
            onClick={() => {
              window.open("https://www.linkedin.com/in/tazim-ahmed/", "_blank");
            }}
          />
        </span>
        <span title="Download Resume">
          <GetAppIcon />
        </span>
      </div>
    </div>
  );
};

export default Page;
