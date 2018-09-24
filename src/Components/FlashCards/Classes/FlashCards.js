import React, {PureComponent} from 'react'
import FlashCard from "../FlashCard";
import * as PropTypes from "prop-types";

class FlashCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rendered: []
    }
  }

  getCard() {
    let rand, rendered = this.state.rendered;

    do rand = Math.floor(Math.random() * this.props.cards.length);
    while (rendered.includes(rand));

    rendered.push(rand);
    this.setState({rendered});

    return this.props.cards[rand];
  }

  render() {
    return <div className={'FlashCards'}>
      <FlashCard card={this.getCard()} />
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