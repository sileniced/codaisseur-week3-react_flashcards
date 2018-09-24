import * as PropTypes from "prop-types";
import React from "react";

export function NextFlashCard(props) {
  return <button
    className={"NextCard"}
    onClick={props.onClick}
  >
    next
  </button>;
}

NextFlashCard.propTypes = {
  onClick: PropTypes.func
};