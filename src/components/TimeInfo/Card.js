import React from "react";
import styled from "styled-components";

function Card(props) {
  const dateName = props.dateName;

  return (
    <div>
      <h1>{props.timeframes[dateName].current}</h1>
      <h1>{props.timeframes[dateName].previous}</h1>
    </div>
  );
}

export default Card;
