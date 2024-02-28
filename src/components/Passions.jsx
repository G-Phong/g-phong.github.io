import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img_phong_chess_thinking from "../assets/phong_chess_thinking.jpg";
import img_phong_run from "../assets/10km_run.jpg";
import img_fussball_2018 from "../assets/fussball_2018.jpg";
import img_gartenhaus from "../assets/gartenhaus.jpg";
import img_internationals from "../assets/internationals_prague.jpg";
import img_mechanics from "../assets/mech_eng.jpg";
import img_phong_greek_flag from "../assets/phong_greek_flag.jpg";
import img_phong_gym from "../assets/phong_gym.jpg";
import img_phong_science from "../assets/phong_science_prague.jpg";
import img_phong_tum_graduate from "../assets/phong_tum_graduate.jpg";
import img_team_athen from "../assets/team_athen.jpg";
import img_foodtruck from "../assets/elephant_foodtruck.jpg";
import img_thaiboxen from "../assets/thaiboxen.jpg";
import img_insi_singen from "../assets/insi_singen.png";

function Passions() {
  return (
    <div className="free-time-activities">
      <h2>Free Time Activities</h2>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Carousel
            showArrows={true}
            showThumbs={true}
            width={400}
            transitionTime={10}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            axis="horizontal"
            dynamicHeight = {false}
          >
            <div>
              <img src={img_phong_chess_thinking} alt="Chess Thinking" />
              <p>Description of Chess Thinking</p>
            </div>
            <div>
              <img src={img_phong_run} alt="Running" />
              <p>Description of Running</p>
            </div>
            <div>
              <img src={img_fussball_2018} alt="Playing Football" />
              <p>Description of Playing Football</p>
            </div>
            <div>
              <img src={img_gartenhaus} alt="Gartenhaus" />
              <p>Description of Gartenhaus</p>
            </div>
            <div>
              <img src={img_internationals} alt="International Experiences" />
              <p>Description of International Experiences</p>
            </div>
            <div>
              <img src={img_mechanics} alt="Mechanical Engineering" />
              <p>Description of Mechanical Engineering</p>
            </div>
            <div>
              <img src={img_phong_greek_flag} alt="Greek Flag" />
              <p>Description of Greek Flag</p>
            </div>
            <div>
              <img src={img_phong_gym} alt="Gym Workout" />
              <p>Description of Gym Workout</p>
            </div>
            <div>
              <img src={img_phong_science} alt="Science in Prague" />
              <p>Description of Science in Prague</p>
            </div>
            <div>
              <img src={img_phong_tum_graduate} alt="Graduation from TUM" />
              <p>Description of Graduation from TUM</p>
            </div>
            <div>
              <img src={img_team_athen} alt="Team in Athens" />
              <p>Description of Team in Athens</p>
            </div>
            <div>
              <img src={img_foodtruck} alt="Foodtruck" />
              <p>Description of Foodtruck</p>
            </div>
            <div>
              <img src={img_thaiboxen} alt="Thai Boxing" />
              <p>Description of Thai Boxing</p>
            </div>
            <div>
              <img src={img_insi_singen} alt="Insi Singen" />
              <p>Description of Insi Singen</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Passions;