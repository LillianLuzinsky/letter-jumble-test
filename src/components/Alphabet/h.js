import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #h {
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

function H() {
  return (
    <SVGContainer>
      <svg id="h"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M50.5 69.5L50.5 152.5" className="h"></path>
        <path d="M100.5 70L100.5 153" className="h"></path>
        <path d="M49.5 110.5L102.5 110.5" className="h"></path>
      </g>
      <g>
        <path d="M134.5 70L134.5 153" className="h"></path>
        <path
          d="M134.5 118.5s0-11 10-18c0 0 18-11 30 6 0 0 4 4 4 15v31"
          className="h"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default H;
