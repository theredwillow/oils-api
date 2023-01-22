import React from "react";
var smoothScroll = require("smoothscroll");

class Card extends React.Component {
  handleOilClick(e) {
    e.preventDefault();
    const oil = this.props.content.name;
    this.props.toggleOil(oil);
    const elementsOrder = ["base", "middle", "top", "calculate"];
    const getNextElement = (currentElement) => {
      const index = elementsOrder.indexOf(currentElement);
      return elementsOrder[index + 1];
    };
    const moveTo = document.getElementById(getNextElement(this.props.level));
    smoothScroll(moveTo);
  }

  render() {
    const card = this.props.content;
    const checked = this.props.checked;
    return (
      <div className="card" id="card" style={this.props.cardStyle}>
        <img className="oil-photo" src={card.url} alt="oil" height="200" />
        <p className="title">{card.name}</p>
        <p className="desc">{card.desc}</p>
        <div
          className={checked ? "checked" : "check"}
          onClick={this.handleOilClick.bind(this)}
        ></div>
      </div>
    );
  }
}

export default Card;
