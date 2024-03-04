import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img_phong_chess_thinking from "../assets/phong_chess_thinking.jpg";
import img_phong_run from "../assets/10km_run.jpg";
import img_fussball_2018 from "../assets/fussball_2018.jpg";
import img_gartenhaus from "../assets/gartenhaus.jpg";
import img_internationals from "../assets/internationals_prague.jpg";
import img_phong_greek_flag from "../assets/phong_greek_flag.jpg";
import img_phong_gym from "../assets/phong_gym.jpg";
import img_phong_science from "../assets/phong_science_prague.jpg";
import img_phong_tum_graduate from "../assets/phong_tum_graduate.jpg";
import img_foodtruck from "../assets/elephant_foodtruck.jpg";
import img_thaiboxen from "../assets/thaiboxen.jpg";
import img_insi_singen from "../assets/insi_singen.png";
import img_vietnam from "../assets/vietnam.jpg";
import img_phong_chess_fide from "../assets/fide_phong_cropped.png"

import TypingEffect from "./TypingEffect";

function Passions() {
  return (
    <div className="free-time-activities">
      <TypingEffect text="My Passions"></TypingEffect>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Carousel
            showArrows={true}
            showThumbs={true}
            width={550}
            transitionTime={1000}
            interval={5000}
            showIndicators={true}
            centerMode={false}
            infiniteLoop={true}
            autoPlay={true}
            axis="horizontal"
            dynamicHeight={true}
            centerSlidePercentage={80}
            autoFocus={true}
            showStatus={false}
            animationHandler="fade"
          >
            <div>
              <img src={img_fussball_2018} alt="Playing Football" />
              <p className="legend">
                Soccer has always been a passion of mine ⚽
              </p>
            </div>
            <div>
              <img src={img_phong_run} alt="Running" />
              <p className="legend">Striving for even better runs 🏃🏼‍♂️</p>
            </div>
            <div>
              <img src={img_thaiboxen} alt="Thai Boxing" />
              <p className="legend">
                Martial arts gives me focus and adrenaline 🥊
              </p>
            </div>
            <div>
              <img src={img_phong_gym} alt="Gym Workout" />
              <p className="legend">
                Being fit and staying fit is part of everyday life 💪
              </p>
            </div>
            <div>
              <img src={img_phong_chess_thinking} alt="Chess Thinking" />
              <p className="legend">Thinking about the next moves ♚</p>
            </div>
            <div>
              <img src={img_phong_chess_fide} alt="Chess Fide" />
              <p className="legend">My official FIDE Rating ♚</p>
            </div>
            <div>
              <img src={img_phong_science} alt="Science in Prague" />
              <p className="legend">
                The strong will to always learn new things and grow 📚
              </p>
            </div>
            <div>
              <img src={img_phong_tum_graduate} alt="Graduation from TUM" />
              <p className="legend">
                The breathtaking feeling of having achieved something and then
                continuing to grow beyond it 🎓
              </p>
            </div>
            <div>
              <img src={img_phong_greek_flag} alt="Greek Flag" />
              <p className="legend">
                Living abroad, like in Greece, are particularly special for me
                🇬🇷
              </p>
            </div>
            <div>
              <img src={img_vietnam} alt="Vietnam" />
              <p className="legend">
                My Asian roots lie in beautiful Vietnam 🇻🇳
              </p>
            </div>
            <div>
              <img src={img_internationals} alt="International Experiences" />
              <p className="legend">
                Getting to know people from other cultures inspires me 🌍
              </p>
            </div>
            <div>
              <img src={img_insi_singen} alt="Insi Singen" />
              <p className="legend">
                Helping young refugees, contributing to society fulfills me 🌟
              </p>
            </div>

            <div>
              <img src={img_foodtruck} alt="Foodtruck" />
              <p className="legend">
                Food is one of my passions, so I worked in a burger food truck
                🍔
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Passions;
