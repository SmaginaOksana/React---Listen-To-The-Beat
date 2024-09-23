import "./Footer.scss";
import heart from "../../assets/heart.png";
import flashYellow from "../../assets/flashYellow.png";
import flashBlack from "../../assets/flashBlack.png";
import behance from "../../assets/behance.png";
import dribbble from "../../assets/dribbble.png";
import instagramBlack from "../../assets/instagramBlack.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div className="container footer">
          <h1>Download the future</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim.
          </p>
          <form action="3">
            <input type="text" placeholder="Input text placeholder" />
            <button className="signUp">
              <span>Sign Up</span>
              <img src={flashBlack} alt="flashBlack" />
            </button>
          </form>
          <div className="social">
            <div>
              <img src={behance} alt="behance" />
            </div>
            <div>
              <img src={dribbble} alt="dribbble" />
            </div>
            <div>
              <img src={instagramBlack} alt="instagramBlack" />
            </div>
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <div className="container footer">
          <div className="sections">
            <div>
              <h4>Product</h4>
              <a href="#">How it works</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Testimonials</a>
            </div>
            <div>
              <h4>About form</h4>
              <a href="#">Our team</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Stores</a>
            </div>
            <div>
              <h4>Connect</h4>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Linkedin</a>
            </div>
            <div>
              <h4>Contact</h4>
              <span>info@gmail.com</span>
              <span>000-000-0000</span>
              <span>0000 Willa River Suite 000</span>
            </div>
            <div className="news">
              <h4>Newsletter</h4>
              <p>Join our weekly maiiling list</p>
              <span className="name">Name *</span>
              <form action="#">
                <input type="text" placeholder="Input text placeholder" />
                <button className="signUp">
                  <span>Sign Up</span>
                  <img src={flashYellow} alt="flashYellow" />
                </button>
              </form>
            </div>
          </div>
          <hr />
          <div className="linksFooterEnd">
            <div className="links">
              <a href="#">Terms and conditions</a>
              <a href="#">Legal</a>
              <a href="#">Pattents</a>
            </div>
            <div>
              <img src={heart} alt="heart" />
              <p>Designed to be loved © 2008-2021</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
