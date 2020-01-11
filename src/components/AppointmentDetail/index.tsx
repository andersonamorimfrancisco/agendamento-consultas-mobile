import React from "react";
import * as Styles from "./styles";
import { Appointment } from "../../types";

interface AppointmentDetailProps {
  appointment: Appointment;
}

const AppointmentDetail = ({
  appointment
}: AppointmentDetailProps): JSX.Element => (
  <Styles.Container>
    <Styles.Title>{`Data: ${appointment.date}`}</Styles.Title>
    <Styles.Title>{`Patient: ${appointment.patient.name}`}</Styles.Title>
    <Styles.Title>{`Telefone: ${appointment.patient.phoneNumber}`}</Styles.Title>
    <Styles.Title>{`Contato: ${appointment.patient.contactPhoneNumber}`}</Styles.Title>
    <Styles.Title></Styles.Title>
    <Styles.Title>Patiente fixo:</Styles.Title>
  </Styles.Container>
);

export default AppointmentDetail;
