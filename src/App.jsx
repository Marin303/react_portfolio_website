import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./Pages/FirstPage";
import AboutMe from "./Pages/AboutMe";
import FeaturedProjects from "./Pages/FeaturedProjects";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div className="app bg-dark">
      <FirstPage />
      <AboutMe />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};
export default App;
