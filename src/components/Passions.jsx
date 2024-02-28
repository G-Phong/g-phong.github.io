import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/*
Fußball
Kampfsport
Schach
Mathe-Nachhilfe
Burger Foodtruck
Interkulturelles: Athen, Prague Trip
Buddy Programm
Vietnamesische Kultur
*/

function Passions() {
  return (
    <div className="free-time-activities">
      <h2>Free Time Activities</h2>
      <Carousel showArrows={true} showThumbs={false}>
        {/* Add your carousel slides here */}
        <div>
          <img src="your-image-url-1" alt="Activity 1" />
          <p>Description of activity 1</p>
        </div>
        <div>
          <img src="your-image-url-2" alt="Activity 2" />
          <p>Description of activity 2</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
}

export default Passions;
