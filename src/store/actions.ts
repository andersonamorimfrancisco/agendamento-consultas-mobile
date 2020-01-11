import { Patient, Action, Appointment } from "../types";

export const updatePatientList = (patients: Patient[]): Action => ({
  type: "UPDATE_PATIENT_LIST",
  data: patients
});

export const updateAppointmentList = (appointments: Appointment[]): Action => ({
  type: "UPDATE_APPOINTMENT_LIST",
  data: appointments
});

export const setActiveWeek = (week: number): Action => ({
  type: "SET_ACTIVE_WEEK",
  data: week
});
export const setActiveWeekDay = (weekDay: number): Action => ({
  type: "SET_ACTIVE_WEEKDAY",
  data: weekDay
});

export const setActiveAppointmentId = (id: string): Action => ({
  type: "SET_ACTIVE_APPOINTMENTID",
  data: id
});
