import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Letter = ({ svg }) => <img src={`./letters/${svg}.svg`} alt="letter" />;

Letter.propTypes = {
  svg: PropTypes.string.isRequired
};

export const LetterContainer = styled.span`
  display: inline-block;
  width: 12vw;
  height: 12vw;
  /* transition: 2s; */
  /* animation: colourRange 4s linear infinite; */

  :hover {
    background: white;
    transition: 3s;
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