import React from "react";

import * as Styles from "./styles";

interface CurrentDayBarProps {
  currentDate: Date;
}

const CurrentDayBar = ({ currentDate }: CurrentDayBarProps): JSX.Element => (
  <Styles.Container>
    <Styles.Title>{currentDate.toLocaleString()}</Styles.Title>
  </Styles.Container>
);

export default CurrentDayBar;
