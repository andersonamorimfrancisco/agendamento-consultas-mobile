import React from "react";
import * as utils from "../../utils";
import * as Styles from "./styles";
import { Patient, Appointment as AppointmentType } from "../../types";

interface AppointmentProps {
  data: AppointmentType;
  patient: Patient;
}

const Appointment = ({ data, patient }: AppointmentProps): JSX.Element => (
  <Styles.Container>
    <Styles.Hour>{utils.normalizeHour(data.date.getHours())}</Styles.Hour>
    <Styles.PatientName>{utils.normalizePatient(patient)}</Styles.PatientName>
  </Styles.Container>
);

export default Appointment;
