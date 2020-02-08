import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #l {
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

function L() {
  return (
    <SVGContainer>
      <svg id="l"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M70 70L70 151 114 151" className="l"></path>
      </g>
      <g>
        <path d="M149.5 70L149.5 154" className="l"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default L;
