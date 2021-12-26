import React from "react";
import styled from "styled-components";

function ProfileUser(props) {
  return (
    <div>
      <h1>Report for</h1>
      <h1>{props.profileUserName}</h1>
    </div>
  );
}

export default ProfileUser;
