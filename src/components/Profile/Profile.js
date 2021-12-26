import React from "react";
import ProfileUser from "./ProfileUser";
import styled from "styled-components";

function Profile(props) {
  return (
    <div>
      {/* <ProfileUser /> */}
      <div>
        <button onClick={props.dailyFunc}>daily</button>
        <button onClick={props.weeklyFunc}>weekly</button>
        <button onClick={props.monthlyFunc}>monthly</button>
      </div>
    </div>
  );
}

export default Profile;
