import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img_phong_chess_thinking from "../assets/phong_chess_thinking.jpg";
import img_phong_run from "../assets/10km_run.jpg";
import img_fussball_2018 from "../assets/fussball_2018.jpg";
import img_internationals from "../assets/internationals_prague.jpg";
import img_phong_greek_flag from "../assets/phong_greek_flag.jpg";
import img_phong_gym from "../assets/phong_gym.jpg";
import img_phong_science from "../assets/phong_science_prague.jpg";
import img_phong_tum_graduate from "../assets/phong_tum_graduate.jpg";
import img_foodtruck from "../assets/elephant_foodtruck.jpg";
import img_thaiboxen from "../assets/thaiboxen.jpg";
import img_insi_singen from "../assets/insi_singen.png";
import img_vietnam from "../assets/vietnam.jpg";
import img_phong_chess_fide from "../assets/fide_phong_cropped.png";

const slides = [
  { img: img_fussball_2018, caption: "Soccer has always been a passion of mine ⚽" },
  { img: img_phong_run, caption: "Striving for even better runs 🏃🏼‍♂️" },
  { img: img_thaiboxen, caption: "Martial arts gives me focus and adrenaline 🥊" },
  { img: img_phong_gym, caption: "Being fit and staying fit is part of everyday life 💪" },
  { img: img_phong_chess_thinking, caption: "Thinking about the next moves ♚" },
  { img: img_phong_chess_fide, caption: "My official FIDE Rating ♚" },
  { img: img_phong_science, caption: "The strong will to always learn new things 📚" },
  { img: img_phong_tum_graduate, caption: "The breathtaking feeling of graduating from TUM 🎓" },
  { img: img_phong_greek_flag, caption: "Living abroad, like in Greece, is special to me 🇬🇷" },
  { img: img_vietnam, caption: "My Asian roots lie in beautiful Vietnam 🇻🇳" },
  { img: img_internationals, caption: "Getting to know people from other cultures inspires me 🌍" },
  { img: img_insi_singen, caption: "Helping young refugees, contributing to society 🌟" },
  { img: img_foodtruck, caption: "Food is a passion — I even worked in a burger food truck 🍔" },
];

function Passions() {
  return (
    <div className="free-time-activities">
      <div className="bio-card" data-aos="fade-up">
        <p className="bio-text">
          I build close to the metal — Embedded Linux and C++ on real hardware.
          Currently at MaibornWolff Munich, shipping IoT systems for the elevator industry.
          Recently fell in love with long-distance running, marathons included.
          On lazy Sundays, you'll find me playing chess with friends over coffee.
        </p>
      </div>
      <div className="skills-section" data-aos="fade-up">
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid">
          {[
            { label: "Languages", skills: [
              { name: "Shell / Bash", icon: "devicon-bash-plain" },
              { name: "Python",       icon: "devicon-python-plain colored" },
              { name: "C++",          icon: "devicon-cplusplus-plain colored" },
            ]},
            { label: "Embedded", skills: [
              { name: "Yocto Project",   icon: null },
              { name: "Embedded Linux",  icon: "devicon-linux-plain" },
            ]},
            { label: "DevOps & Tools", skills: [
              { name: "Git",           icon: "devicon-git-plain colored" },
              { name: "Docker",        icon: "devicon-docker-plain colored" },
              { name: "Bamboo CI/CD",  icon: "devicon-bamboo-plain colored" },
            ]},
            { label: "Agile", skills: [
              { name: "Scrum",  icon: null },
              { name: "Kanban", icon: null },
              { name: "Jira",   icon: "devicon-jira-plain colored" },
            ]},
          ].map(({ label, skills }) => (
            <div key={label} className="skill-category">
              <span className="skill-category-label">{label}</span>
              <div className="skill-badges">
                {skills.map(({ name, icon }) => (
                  <div key={name} className="skill-badge">
                    {icon && <i className={`${icon} skill-icon`}></i>}
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="section-title" data-aos="fade-up">My Passions</h2>
      <div className="swiper-wrapper-custom" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="passions-swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="passions-slide">
              <img src={slide.img} alt={slide.caption} />
              <p className="slide-caption">{slide.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Passions;