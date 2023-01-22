import React from "react";
import Axios from "axios";
// var smoothScroll = require('smoothscroll');

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      currentId: "",
    };
  }

  handleFavoriteClick(e) {
    e.preventDefault();
    // let currentID = e.target.value.id
    // console.log(currentID)
    this.setState({ currentId: this.props.content.id }, () => {
      if (this.props.isLoggedIn) {
        // logged in
        // axios.post
        Axios.post("api/blend/update", {
          favorite: e.target.className === "heartGray",
          id: this.state.currentId,
        }).then(() => {
          this.getBlends();
        });
      } else {
        // not logged in
        // go to login page
        this.props.history.replace("/login");
        console.log("not logged in");
      }
    });
  }

  getBlends() {
    this.props.updateBlends();
  }

  render() {
    const card = this.props.content;
    return (
      <div className="card2" id="card" style={this.props.cardStyle}>
        <img
          className="oil-photo"
          src={`./img/${card.mood}.jpg`}
          alt="oil"
          height="200"
        />
        <p className="recipeOil">{card.baseOil}: 5 drops</p>
        <p className="recipeOil">{card.middleOil}: 4 drops</p>
        <p className="recipeOil">{card.topOil}: 3 drops</p>
        <div
          className={card.favorite === false ? "heartGray" : "heartPink"}
          onClick={this.handleFavoriteClick.bind(this)}
        ></div>
      </div>
    );
  }
}

export default Card;
