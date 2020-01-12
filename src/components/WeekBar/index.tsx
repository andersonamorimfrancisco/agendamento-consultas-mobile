import React from "react";
import * as Styles from "./styles";

interface WeekBarProps {
  initialDay: number;
}

const WeekBar = ({ initialDay }: WeekBarProps): JSX.Element => (
  <Styles.Container>
    <Styles.Title>Dom {initialDay}</Styles.Title>
    <Styles.Title>Seg {initialDay + 1}</Styles.Title>
    <Styles.Title>Ter {initialDay + 2}</Styles.Title>
    <Styles.Title>Qua {initialDay + 3}</Styles.Title>
    <Styles.Title>Qui {initialDay + 4}</Styles.Title>
    <Styles.Title>Sex {initialDay + 5}</Styles.Title>
    <Styles.Title>Sab {initialDay + 6}</Styles.Title>
  </Styles.Container>
);

export default WeekBar;
