import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Letter = ({ svg }) => <img src={svg} alt="letter" />;

Letter.propTypes = {
  svg: PropTypes.string.isRequired
};

export const LetterContainer = styled.span`
  display: inline-block;
  width: 12vw;
  height: 12vw;
  opacity: 1;
  transition: opacity 1s ease;

  :hover {
    background-color: white;
    opacity: 0.3;
  }
`;