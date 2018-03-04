import React from "react";
import TextSection from '../textSection/textSection';
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <TextSection
        title="About"
        className="about"
      >
        <p>
          After an unfulfilling career at the bank, I decided to quit my job
          and revisit my passion since high school. After meeting up with a
          few designers at popular trade shows, I decided Camosun Fine Furniture
          was the right place to pursue my passion in woodworking.
          Instantly drawn by the satisfaction of creating beautiful functional art,
          there was no turning back. Over the years of woodworking, the satisfaction
          of furniture making has become a necessity.
        </p>
        <p>
          I am truly grateful to have been taught by some of the best instructors in the trade.
          I hope to replicate the efforts and pass on my knowledge to the next generation
          and to extend the art of furniture making before it is long forgotten.
          My name is Janson and welcome to <b><i>Outlier Joinery</i></b>.
        </p>
      </TextSection>
    );
  }
}

export default About;
