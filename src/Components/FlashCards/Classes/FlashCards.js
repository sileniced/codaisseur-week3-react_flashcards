import React, {PureComponent} from 'react'
import FlashCard from "./FlashCard";
import * as PropTypes from "prop-types";

class FlashCards extends PureComponent {
  constructor(props) {
    super(props);

    const rand = Math.floor(Math.random() * this.props.cards.length);

    this.state = {
      card: this.props.cards[rand],
      rendered: [rand]
    };
  }

  setCard() {
    let rand, rendered = this.state.rendered;

    do rand = Math.floor(Math.random() * this.props.cards.length);
    while (rendered.includes(rand));

    rendered.push(rand);
    this.setState({
      card: this.props.cards[rand],
      rendered
    });
  }

  render() {
    return <div className={'FlashCards'}>
      <FlashCard card={this.state.card} />
      <button className={'NextCard'} onClick={() => this.setCard()}>next</button>
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