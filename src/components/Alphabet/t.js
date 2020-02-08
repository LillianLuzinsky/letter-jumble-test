import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #t {
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

function T() {
  return (
    <SVGContainer>
      <svg id="t"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M80.2 70.4L80.2 153.9" className="t"></path>
        <path d="M49.1 72.8L111.3 72.8" className="t"></path>
      </g>
      <g>
        <path d="M145.2 71.5v70.6s-.3 9.9 9.9 9.9" className="t"></path>
        <path d="M131.9 98L158.6 98" className="t"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default T;
