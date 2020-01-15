import { Appointment, Action } from "../types";

export const updateAppointmentList = (appointments: Appointment[]): Action => ({
  type: "UPDATE_APPOINTMENT_LIST",
  data: appointments
});
