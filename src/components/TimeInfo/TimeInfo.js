import React from "react";
import styled from "styled-components";
import data from "../data/data.json";

import Card from "./Card";

function TimeInfo(props) {
  const CardProcessed = data.map((infomation) => {
    return <Card dataName={props.dataName} {...infomation} />;
  });
  return <div>{CardProcessed}</div>;
}

export default TimeInfo;
