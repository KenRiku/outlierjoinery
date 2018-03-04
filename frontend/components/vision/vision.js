import React from "react";
import TextSection from '../textSection/textSection';
import "./vision.css";

class Vision extends React.Component {
  render() {
    return (
      <TextSection
        title="Our Vision"
        className="vision"
      >
        <p>
          At Outlier Joinery, our purpose is to create uncompromising
          furniture that marries design and functionality into one
          cohesive piece. Every project begins with an idea;
          an inspiration that brings us on a journey of sketches
          to hand work that realizes the design into its physical form.
          Every design and joinery is handcrafted to the potential of each
          piece accentuating the natural beauty and tenacity of the wood.
          All of our materials are hand picked from local lumber yards to
          accentuate our clients’ needs and to ensure waste is minimized.
          Our designs gravitate towards our appreciation for Japanese joinery
          as well as Mid-century modern and Scandinavian designs.
          Nonetheless we also enjoy collaborating with our clients to
          build the piece that suits their needs.
        </p>
        <p>
          Being aware of the strenuous efforts and time it takes for materials to grow, we make great efforts to reduce waste and fully utilize the materials that are harvested.
        </p>
      </TextSection>
    );
  }
}

export default Vision;
