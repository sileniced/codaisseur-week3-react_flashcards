import React from "react";
import * as PropTypes from "prop-types";

export function Intro(props) {
  return <p className="Intro">
    {props.title}
  </p>;
}

Intro.propTypes = {
  title: PropTypes.string
};