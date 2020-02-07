import React from "react";
import PropTypes from "prop-types";

const Letter = ({ svg }) => <img src={svg} alt="letter" />;

Letter.propTypes = {
  svg: PropTypes.string.isRequired
};

export default Letter;
