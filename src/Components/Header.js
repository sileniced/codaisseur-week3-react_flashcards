import React from "react";
import * as PropTypes from "prop-types";

export function Header(props) {
  return <header className="Header">
    <h1 className="Title">{props.title}</h1>
  </header>;
}

Header.propTypes = {
  title: PropTypes.string
};