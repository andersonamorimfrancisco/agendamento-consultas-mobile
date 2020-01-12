import { Appointment } from "../types";

const filterAppointmentAvailability = (
  appointment: Appointment,
  filter: number
) => {
  if (filter === 0) {
    return appointment;
  }
  if (filter === 1 && appointment.patient) {
    return appointment;
  }
  if (filter === 2 && !appointment.patient) {
    return appointment;
  }
};

export default filterAppointmentAvailability;
