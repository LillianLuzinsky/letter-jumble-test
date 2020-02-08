import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #k {
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

function K() {
  return (
    <SVGContainer>
      <svg id="k"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M47 69L47 154.5" className="k"></path>
        <path d="M105.5 71.5L47.5 129.5" className="k"></path>
        <path d="M69.5 106.5L106.5 154.5" className="k"></path>
      </g>
      <g>
        <path d="M138.5 69L138.5 154.5" className="k"></path>
        <path d="M180.5 94.5L138.5 136.5" className="k"></path>
        <path d="M154.5 122.5L180.5 154.5" className="k"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default K;
