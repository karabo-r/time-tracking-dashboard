import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./components/Profile/Profile";
import TimeInfo from "./components/TimeInfo/TimeInfo";
import {
  daily,
  weekly,
  monthly,
} from "./components/Modules/DateChangeFunctions";

function App() {
  const [dateName, setDateName] = useState("daily");

  // Functions.daily(setDateName);
  // weekly(setDateName);
  // monthly(setDateName);

  // daily(dateName);

  return (
    <div>
      <Profile dailyFunc={daily} weeklyFunc={weekly} monthlyFunc={monthly} />
      <TimeInfo dateName={dateName} />
    </div>
  );
}

export default App;
