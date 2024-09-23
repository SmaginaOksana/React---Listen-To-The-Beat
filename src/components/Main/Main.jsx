import "./Main.scss";
import flashBlack from "../../assets/flashBlack.png";
import addResume from "../../assets/addResume.png";
import instagramBlue from "../../assets/instagramBlue.png";
import telegram from "../../assets/telegram.png";
import linkedin from "../../assets/linkedin.png";
import avatar_1 from "../../assets/avatar_1.png";
import avatar_2 from "../../assets/avatar_2.png";
import avatar_3 from "../../assets/avatar_3.png";
import logotip_1 from "../../assets/logotip_1.png";
import logotip_2 from "../../assets/logotip_2.png";
import logotip_3 from "../../assets/logotip_3.png";
import logotip_4 from "../../assets/logotip_4.png";
import logotip_5 from "../../assets/logotip_5.png";
import logotip_6 from "../../assets/logotip_6.png";

import unsplash_1 from "../../assets/unsplash_1.png";
import unsplash_2 from "../../assets/unsplash_2.png";
import unsplash_3 from "../../assets/unsplash_3.png";
import unsplash_4 from "../../assets/unsplash_4.png";
import unsplash_5 from "../../assets/unsplash_5.png";
import shapeBlue from "../../assets/shapeBlue.png";
import shapeYellow from "../../assets/shapeYellow.png";

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
            <div>
              <div>
                <img src={logotip_1} alt="logotip_1" />
              </div>
              <div>
                <h3 className="yellow">Auto Layout </h3>
                <p>
                  Sed do eiusmod tempor incididunt ut consectetur adipisicing
                  elit,do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={logotip_2} alt="logotip_2" />
              </div>
              <div>
                <h3 className="red">Variants</h3>
                <p>
                  Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={logotip_3} alt="logotip_3" />
              </div>
              <div>
                <h3 className="violet">Components</h3>
                <p>
                  Dor sum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore ma iusmod
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src={logotip_4} alt="logotip_4" />
              </div>
              <div>
                <h3 className="green">Atomic Design</h3>
                <p>
                  Adipisicing elit, orem ipsum dolor sit amet, consectetur sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={logotip_5} alt="logotip_5" />
              </div>
              <div>
                <h3 className="blue">Animated</h3>
                <p>
                  Morem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>{" "}
              `
            </div>
            <div>
              <div>
                <img src={logotip_6} alt="logotip_6" />
              </div>
              <div>
                <h3 className="pink">Responsive</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
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
            <div className="team1">
              <div className="personData">
                <h5>Pieter Omvlee</h5>
                <span>Designer</span>
                <div>
                  <img src={instagramBlue} alt="instagramBlue" />
                  <img src={telegram} alt="telegram" />
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </div>
            <div className="team2">
              <div className="personData">
                <h5>Loyd Maywe</h5>
                <span>Php developer</span>
                <div>
                  <img src={instagramBlue} alt="instagramBlue" />
                  <img src={telegram} alt="telegram" />
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </div>
            <div className="team3">
              <div className="personData">
                <h5>Latte Macchiato</h5>
                <span>CEO Company</span>
                <div>
                  <img src={instagramBlue} alt="instagramBlue" />
                  <img src={telegram} alt="telegram" />
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </div>
            <div className="team4">
              <div className="personData">
                <h5>Cheese Cake</h5>
                <span>Art Director</span>
                <div>
                  <img src={instagramBlue} alt="instagramBlue" />
                  <img src={telegram} alt="telegram" />
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
