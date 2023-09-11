import "./App.scss";
import FirstPage from "./Pages/FirstPage";
import NavigationMenu from "./Shared/NavigationMenu"
import AboutMe from "./Pages/AboutMe";
import FeaturedProjects from "./Pages/FeaturedProjects";
import Footer from "./Pages/Footer";

const App = ({ isVisible, btnContentRef }) => {
  return (
    <div className="app">
      <header>
        {/* <NavigationMenu isVisible={isVisible} /> */}
      </header>
      <div className="content">
        <div className="left">
          <FirstPage />
        </div>
        <div className="rigth">
          test
          {/* <AboutMe />
        <FeaturedProjects />
         */}
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default App;
