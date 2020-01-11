import React from "react";
import * as Styles from "./styles";

interface AppointmentBodyProps {
  hour: string;
  patient: string;
  onPress: Function;
}

const AppointmentBody = ({
  hour,
  patient,
  onPress
}: AppointmentBodyProps): JSX.Element => (
  <Styles.Body onPress={() => onPress()}>
    <Styles.Hour>{hour}</Styles.Hour>
    <Styles.Patient>{patient}</Styles.Patient>
  </Styles.Body>
);

export default AppointmentBody;
