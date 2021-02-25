import "./Works.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Calculator from "../static/calculator.png";
import Fishbowl from "../static/fish bowl.png";
// import Chatnow from "../static/chatnow.png";
import TicTacToe from "../static/tictactoe.png";
import Colorswitcher from "../static/color switcher.png";
import FB from "../static/fb img.png";
import Todo from "../static/todo.png";
import Emoji from "../static/emoji.png";
import Tip from "../static/tip calculator.png";
import QRcode from "../static/QR.png";
import Clock from "../static/digital clock.png";
import Sound from "../static/sound.png";

const Works = () => {
  return (
    <section className="container workcontainer">
      <div className="works-wrap wrap">
        <div className="work-right-wrap">
          <ul className="works">
            <a href="https://github.com/sivin-git/Calculator">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Calculator}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Calculator</h1>
                  <p className="piece_description">
                    Calculator, build using JavaScript, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Clock}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Digital Clock</h1>
                  <p className="piece_description">
                    Digital Clock website, build using JavaScript, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works" >
            <a href="https://github.com/sivin-git/ChatNow">
              <div className="piece inner_container" >
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src="https://res.cloudinary.com/https-www-sivin-me/image/upload/v1614264061/chatnow_dmccc6.png"
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">ChatNow</h1>
                  <p className="piece_description">
                    Web Chat App build using React JS, Firebase, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={FB}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Facebook Login</h1>
                  <p className="piece_description">
                    Facebook login page, build using JavaScript, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git/Fish-Bowl">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Fishbowl}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Fish Bowl</h1>
                  <p className="piece_description">
                    Moving animated fish Bowl, build using CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={TicTacToe}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Tic-tac-toe</h1>
                  <p className="piece_description">
                    Tic-tac-toe game, build using JavaScript, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git/Color-Switcher">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Colorswitcher}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Color Switcher</h1>
                  <p className="piece_description">
                    Background color switcher, build using VueJS, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Todo}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Todo App</h1>
                  <p className="piece_description">
                    Web Todo App, build using React JS, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git/Tip-Calculator">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Tip}
                    alt=""
                    effect="blur"
                  />
                  <div className="piece_content">
                    <h1 className="piece_title">Tip Calculator</h1>
                    <p className="piece_description">
                      Tip Calculator, build using JavaScript, CSS, HTML.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git/QRCode-Generator">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={QRcode}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">QR Code Generator</h1>
                  <p className="piece_description">
                    QRCode Generator, build using JavaScript, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git/Emoji-Switcher">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Emoji}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Emoji Switcher</h1>
                  <p className="piece_description">
                    Emoji Switcher, build using JavaScript, CSS, HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>

          <ul className="works">
            <a href="https://github.com/sivin-git">
              <div className="piece inner_container">
                <div className="image">
                  <LazyLoadImage
                    className="workimg"
                    src={Sound}
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="piece_content">
                  <h1 className="piece_title">Sounds</h1>
                  <p className="piece_description">
                    Sounds when mouseover color, build using JavaScript, CSS,
                    HTML.
                  </p>
                </div>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Works;
