import React from "react";

import * as Styles from "./styles";

interface CurrentDayProps {
  currentDay: Date;
}

const CurrentDay = ({ currentDay }: CurrentDayProps): JSX.Element => (
  <Styles.Container>
    <Styles.Title>{currentDay.toLocaleString()}</Styles.Title>
  </Styles.Container>
);

export default CurrentDay;
