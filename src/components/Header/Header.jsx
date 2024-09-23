import "./Header.scss";
import logo from "../../assets/logo.png";
import getFile from "../../assets/getFile.png";
import satellite from "../../assets/satellite.png";
import meteorite from "../../assets/meteorite.png";
import planets from "../../assets/planets.png";
import play from "../../assets/play.png";
import burger from "../../assets/burgerWhite.png";
import flashYellow from "../../assets/flashYellow.png";

const Header = () => {
  return (
    <header>
      <div className="container header">
        <div className="top">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <a href="#">How it Works</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Blog</a>
            <a href="#">Log In</a>
            <a href="#" className="signUp">
              Sign Up
              <img src={flashYellow} alt="flashYellow" />
            </a>
          </nav>
          <div className="burger">
            <img src={burger} alt="burger" />
          </div>
        </div>
        <div className="title">
          <div className="titleName">
            {" "}
            <h1>Listen To The Beat Of The Web</h1>
            <p>
              First template from series templates to design web pages, using
              components system
            </p>
            <button>
              <span>Let’s Go</span>
              <img src={getFile} alt="getFile" />
            </button>
          </div>
          <div className="titleButton">
            <div>
              <div>
                <img src={play} alt="play" />
              </div>
            </div>
          </div>
        </div>
        <div className="howItWorks">
          <h2>How it works</h2>
          <div>
            <div>
              <img src={satellite} alt="satellite" />
              <h3>Read it</h3>
              <p>
                Ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div>
              <img src={meteorite} alt="meteorite" />
              <h3>Apply</h3>
              <p>
                Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna dolore.
              </p>
            </div>
            <div>
              <img src={planets} alt="planets" />
              <h3>Multiply</h3>
              <p>
                Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore orem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
