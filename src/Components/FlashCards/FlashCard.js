import React, {PureComponent} from 'react';
import * as PropTypes from "prop-types";

class FlashCard extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      isFront: true
    }
  }

  handleClick() {
    this.setState({
      isFront: !this.state.isFront
    })
  }

  render() {
    return <div className={'FlashCard'} onClick={() => this.handleClick() }>
      {this.state.isFront ? this.props.card.question : this.props.card.answer }
    </div>
  }
}

FlashCard.propTypes = {
  card: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string
  })
};

export default FlashCard;