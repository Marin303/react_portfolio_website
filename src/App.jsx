import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./Pages/FirstPage";
import AboutMe from "./Pages/AboutMe";
import FeaturedProjects from "./Pages/FeaturedProjects";
import Footer from "./Pages/Footer";
import Projects from "./Pages/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <FirstPage />
              <AboutMe />
              <FeaturedProjects />
              <Footer />
            </>
          } />
          <Route path="/preview" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App