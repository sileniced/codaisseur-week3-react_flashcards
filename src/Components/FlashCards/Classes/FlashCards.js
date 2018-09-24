import React, {PureComponent} from 'react'
import {FlashCard} from "../FlashCard";
import * as PropTypes from "prop-types";
import {NextFlashCard} from "../NextFlashCards";

class FlashCards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      card: this.props.cards.pop(),
      isFront: true
    };
  }

  handleNextCard() {
    if (this.props.cards.length > 0) {
      this.setState({
        isFront: true,
        card: this.props.cards.pop(),
      });
    } else {
      this.setState({
        isFront: true,
        card: {
          question: "NO MORE QUESTIONS",
          answer: "CLICK BACK TO GO BACK TO THE HOMEPAGE"
        },
      });
    }
  }

  handleCardClick() {
    this.setState({
      isFront: !this.state.isFront
    })
  }

  render() {
    return <div className={'FlashCards'}>
      <FlashCard
        card={this.state.card}
        isFront={this.state.isFront}
        onClick={() => this.handleCardClick()}
      />
      <NextFlashCard onClick={() => this.handleNextCard()} />
    </div>
  }
}

FlashCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string
  }))
};

export default FlashCards;