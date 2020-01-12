import React from "react";
import * as Styles from "./styles";

interface WeekBarProps {
  initialDay: number;
  activeWeekDay: number;
  onPress: Function;
}

const WeekBar = ({
  initialDay,
  activeWeekDay,
  onPress
}: WeekBarProps): JSX.Element => (
  <Styles.Container>
    {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((weekDay, index) => (
      <Styles.WeekDay key={weekDay} onPress={() => onPress(index)}>
        <Styles.Text>{weekDay}</Styles.Text>
        {index === activeWeekDay ? (
          <Styles.ActiveNumber>{initialDay + index}</Styles.ActiveNumber>
        ) : (
          <Styles.Number>{initialDay + index}</Styles.Number>
        )}
      </Styles.WeekDay>
    ))}
  </Styles.Container>
);

export default WeekBar;
