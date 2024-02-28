import React from "react";
import { Card, CardHeader, CardBody, CardFooter, FlippingCard, FlippingCardBack, FlippingCardFront } from "react-ui-cards";

function Projects() {
  return (
    <div className="projects">
      <h2>My Coding Projects</h2>
      <FlippingCard>
        <FlippingCardBack>
          Content that will be displayed on the back of the card
        </FlippingCardBack>
        <FlippingCardFront>
          Content that will be displayed on the front of the card
        </FlippingCardFront>
      </FlippingCard>
    </div>
  );
}

export default Projects;
