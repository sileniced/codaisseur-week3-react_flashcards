import React from 'react';
import * as PropTypes from "prop-types";

export function FlashCard(props) {
  return <button
    className={`FlashCard ${props.isFront ? 'front' : 'back'}`}
    onClick={props.onClick}
  >
    {props.isFront ? props.card.question : props.card.answer }
  </button>
}

FlashCard.propTypes = {
  card: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string
  }),
  onClick: PropTypes.func,
  isFront: PropTypes.bool
};