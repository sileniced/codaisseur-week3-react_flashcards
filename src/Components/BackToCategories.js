import * as PropTypes from "prop-types";
import React from "react";

export function BackToCategories(props) {
  return <button className={"BackToCategories"} onClick={props.onClick}>
    Back to Categories
  </button>;
}

BackToCategories.propTypes = {onClick: PropTypes.func};