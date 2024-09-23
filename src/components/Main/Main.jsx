import "./Main.scss";
import flashBlack from "../../assets/flashBlack.png";
import addResume from "../../assets/addResume.png";
import avatar_1 from "../../assets/avatar_1.png";
import avatar_2 from "../../assets/avatar_2.png";
import avatar_3 from "../../assets/avatar_3.png";
import SpeedUpProcess from "../SpeedUpProcess/SpeedUpProcess";
import unsplash_1 from "../../assets/unsplash_1.png";
import unsplash_2 from "../../assets/unsplash_2.png";
import unsplash_3 from "../../assets/unsplash_3.png";
import unsplash_4 from "../../assets/unsplash_4.png";
import unsplash_5 from "../../assets/unsplash_5.png";
import shapeBlue from "../../assets/shapeBlue.png";
import shapeYellow from "../../assets/shapeYellow.png";
import ProjectTeam from "../ProjectTeam/ProjectTeam";

const Main = () => {
  return (
    <main>
      <div className="container main">
        <div className="why">
          <h2>Why you'll love it</h2>
          <div className="reviews">
            <div>
              <div className="personData">
                <img src={avatar_1} alt="avatar_1" />
                <div>
                  <h4>Sean Farmer</h4>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliquat enim ad minim
                veniam lorem ipsum dolor.
              </p>
            </div>
            <div>
              <div className="personData">
                <img src={avatar_2} alt="avatar_2" />
                <div>
                  <h4>Nick Parker</h4>
                  <span>Wed-designer</span>
                </div>
              </div>
              <p>
                Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna dolore. Orem ipsum.
              </p>
            </div>
            <div>
              <div className="personData">
                <img src={avatar_3} alt="avatar_3" />
                <div>
                  <h4>Mishel Latuale</h4>
                  <span>Project Manager</span>
                </div>
              </div>
              <p>
                Ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.Ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="unsplashGraphic">
          <h2>Unsplash graphic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim.
          </p>
          <div className="yellowBackground">
            <img src={shapeYellow} alt="shapeYellow" />
          </div>
          <div className="blueBackground">
            <img src={shapeBlue} alt="shapeBlue" />
          </div>
          <div className="pictures">
            <img src={unsplash_1} alt="unsplash_1" />
            <img src={unsplash_2} alt="unsplash_2" />
            <img src={unsplash_3} alt="unsplash_3" />
            <img src={unsplash_4} alt="unsplash_4" />
            <img src={unsplash_5} alt="unsplash_5" />
          </div>
        </div>
        <div className="speedUpDesign">
          <h2>Speed up your design process</h2>
          <div>
            <SpeedUpProcess />
          </div>
        </div>
        <div className="enjoyProduct">
          <div>
            <h2>Enjoy this product</h2>
            <p>
              This project required a huge amount of hours but sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliquat enim ad minim.
            </p>
            <button className="signUp">
              <span>Sign Up</span>
              <img src={flashBlack} alt="flashBlack" />
            </button>
          </div>
        </div>
        <div className="projectTeam">
          <div className="projectTeamTitle">
            <div>
              <h2>Project's team</h2>
              <p>
                Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliquat enim ad minim
                veniam lorem ipsum dolor.Sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <button>
              <span>Join our team</span>
              <img src={addResume} alt="addResume" />
            </button>
          </div>
          <div className="projectTeamPeople">
            <ProjectTeam />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
