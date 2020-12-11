import React, { Component, useState } from "react";
import { useStyles } from "./styles.js";
import avatar from "../../assets/avatar.jpeg";
import { Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const EducationPage = (props) => {
  const classes = useStyles();
  const [openTab, setOpenTab] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>Education</div>
        <div className={classes.school}>
          <span className="schoolInfo">
            <span id="name">Ryerson University</span>
            <span id="major">Mechanical Engineering</span>
          </span>
          <span id="year">December 2020</span>
        </div>
        <div className={classes.school}>
          <span className="schoolInfo">
            <span
              id="relevant-courses"
              onClick={() => {
                setOpenTab(!openTab);
              }}
            >
              Relevant Courses
              {openTab ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
            <Collapse in={openTab}>
              <ul>
                <li>Project Management</li>
                <li>Reliability &amp; Decision Analysis</li>
                <li>Technology &amp; the Enviornment</li>
                <li>Statistics &amp; Numberical Analysis</li>
                <li>Engineering Economics</li>
                <li>Mechatronics System Design</li>
                <li>Mechnical Design</li>
                <li>Computer Control Systems</li>
              </ul>
            </Collapse>
          </span>
        </div>
        <div className={classes.school}>
          <span className="schoolInfo">
            <span id="name">Project Management Institute</span>
            <span id="major">Certificate Associate in Project Management</span>
          </span>
          <span id="year">November 2020</span>
        </div>
        {/* <div className={classes.bio}>"InshaAllah doors will open."</div> */}
      </div>
    </div>
  );
};

export default EducationPage;
