import React, { Component, useState, useEffect } from "react";
import { useStyles } from "./styles.js";
import avatar from "../../assets/avatar.jpeg";
const MenuBar = (props) => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState("about");
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY < height) {
        setActivePage("about");
      } else if (window.scrollY >= height && window.scrollY < height * 2) {
        setActivePage("education");
      } else if (window.scrollY >= height * 2 && window.scrollY < height * 3) {
        setActivePage("projects");
      } else if (window.scrollY >= height * 3 && window.scrollY < height * 4) {
        setActivePage("interests");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  const scrollTo = (pos) => {
    window.scroll({
      top: pos,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = (ref) => {
    scrollTo(ref.current.offsetTop);
  };

  const menuItemStyle = {
    color: "white",
  };
  return (
    <div className={classes.container}>
      <div
        onClick={() => {
          scrollTo(0);
        }}
        className={`${classes.avatar}`}
      >
        <img src={avatar} />
      </div>
      <div className={classes.menuItems}>
        <span
          onClick={() => {
            scrollTo(0);
          }}
          style={activePage === "about" ? { ...menuItemStyle } : null}
        >
          ABOUT
        </span>
        <span
          onClick={() => {
            scrollTo(height);
          }}
          style={activePage === "education" ? { ...menuItemStyle } : null}
        >
          EDUCATION
        </span>
        <span
          style={activePage === "projects" ? { ...menuItemStyle } : null}
          onClick={() => {
            scrollTo(height * 2);
          }}
        >
          PROJECTS
        </span>
        <span
          style={activePage === "interests" ? { ...menuItemStyle } : null}
          onClick={() => {
            scrollTo(height * 3);
          }}
        >
          INTERESTS
        </span>
      </div>
    </div>
  );
};

export default MenuBar;
