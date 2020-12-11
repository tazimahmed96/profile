import React, { Component } from "react";
import { useStyles } from "./styles.js";
import avatar from "../../assets/avatar.jpeg";

const ProjectPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>Projects</div>
        <div className={classes.content}>
          <span id="content-title">PROJECT LEADER</span>
          <span id="content-title-bio">Haptic Feedback Device</span>
          <ul>
            <li>
              Monitored program scope and schedule; ensuring activities executed
              as planned
            </li>
            <li>
              Delegated project tasks to address the team's strengths and
              weaknesses
            </li>
            <li>
              Liaised with suppliers to ensure al parts meet specifications
              without exceeding the budet
            </li>
          </ul>
          <span id="content-title">LEAD MECHNICAL DESIGNER</span>
          <span id="content-title-bio">Electromechnical Scale Project</span>
          <ul>
            <li>
              Generated and reviewed detailed 3-D drawing according to GD&amp;T
              standards
            </li>
            <li>
              Supported project leader with purchasing, RFPs, and submittals to
              increase productivity
            </li>
            <li>
              Provided strategic design advice ensuring the quality of work meet
              the client's expectations
            </li>
          </ul>
          <span id="content-title">LeAD GRAPHICAL PROGRAMMER</span>
          <span id="content-title-bio">Linear Fume Tracker</span>
          <ul>
            <li>
              Recommended and introduced tools, framework and processes to help
              improve efficiency
            </li>
            <li>
              Invigorated struggling team, undermined by member absenteeism,
              boosting productivity
            </li>
            <li>
              Conducted technical and quality assurance reviews of document
              submissions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
