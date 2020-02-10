import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Letter = ({ svg }) => <img src={`./letters/${svg}.svg`} alt="letter" />;

Letter.propTypes = {
  svg: PropTypes.string.isRequired
};

export const LetterContainer = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  width: 10vw;
  height: 10vw;
  transition: 0s;
  /* animation: colourRange 4s linear infinite; */

  :hover {
    background: white;
    transition: 1s;
    /* animation: colourRange 2s linear infinite; */

    @keyframes colourRange{
  0%{
    filter:  hue-rotate(0deg);

  }
  100%{
    filter: hue-rotate(360deg);
  }
}
  }
`;