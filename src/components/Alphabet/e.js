import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #e {
    stroke: pink;
    fill: none;
    stroke-width: 8;
    :hover {
      stroke: black;
    }
  }
  width: 100px;
  height: 100px;
  :hover {
    background-color: red;
    stroke: white;
  }
`;

function E() {
  return (
    <SVGContainer>
      <svg id="e"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M98.5 73.5L52.5 73.5 52.5 151.5 98.5 151.5"
          className="e"
        ></path>
        <path d="M93.5 112.5L50.5 112.5" className="e"></path>
      </g>
      <g>
        <path
          d="M122.5 122.5h52s-2-24-26-24-26 24-26 24-2 22 20 28c19 5.2 30-13 30-13"
          className="e"
        ></path>
      </g>
    </svg>
    </SVGContainer>
  );
}

export default E;
