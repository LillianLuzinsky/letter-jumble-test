import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #x {
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

function X() {
  return (
    <SVGContainer>
      <svg id="x"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M47.8 73L108 155.3" className="x"></path>
        <path d="M108 73L47.8 155.3" className="x"></path>
      </g>
      <g>
        <path d="M133.6 98L175.9 155.9" className="x"></path>
        <path d="M176.7 97.5L133.6 155.3" className="x"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default X;
