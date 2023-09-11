import "./App.scss";
import FirstPage from "./Pages/FirstPage";
import AboutMe from "./Pages/AboutMe";
import FeaturedProjects from "./Pages/FeaturedProjects";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="left">
        <FirstPage />
      </div>
      <div className="rigth">
        {/* <AboutMe />
        <FeaturedProjects />
        <Footer /> */}
      </div>


    </div>
  );
};
export default App;
