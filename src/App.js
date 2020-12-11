import "./App.css";
import MenuBar from "./components/menuBar/index.js";
import AboutPage from "./components/aboutPage/index.js";
import EducationPage from "./components/educationPage/index.js";
import ProjectPage from "./components/projectPage/index.js";
import InterestPage from "./components/interestPage/index.js";
import { useStyles } from "./styles.js";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MenuBar />
      <div className={classes.pageContainer}>
        <AboutPage />
        <EducationPage />
        <ProjectPage />
        <InterestPage />
      </div>
    </div>
  );
}

export default App;
