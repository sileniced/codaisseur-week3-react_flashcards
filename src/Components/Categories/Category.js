import React from "react";
import * as PropTypes from "prop-types";

export function Category(props) {
  return <button className={"Category"} onClick={props.onClick}>
    {props.category}
  </button>;
}

Category.propTypes = {
  onClick: PropTypes.func,
  category: PropTypes.string
};