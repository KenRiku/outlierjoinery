import React from "react";
import "./textSection.css";

class TextSection extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="text-section">
        <h2 className="section-title">
          {this.props.title}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default TextSection;
