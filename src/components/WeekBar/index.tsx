import React from "react";

import * as Styles from "./styles";

interface WeekBarProps {
  currentDate: Date;
}

const WeekBar = ({ currentDate }: WeekBarProps): JSX.Element => (
  <Styles.Container>
    {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((weekDay, index) => {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );
      date.setDate(date.getDate() - date.getDay() + index);
      return (
        <Styles.Item key={weekDay}>
          <Styles.Title>{weekDay}</Styles.Title>
          <Styles.Title>{date.getDate()}</Styles.Title>
        </Styles.Item>
      );
    })}
  </Styles.Container>
);

export default WeekBar;
