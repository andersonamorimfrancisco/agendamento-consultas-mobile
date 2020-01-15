export interface Appointment {
  date: string;
  hour: number;
  day: number;
  month: number;
  year: number;
}
export interface Patient {
  name: string;
  appointments: Appointment[];
}

export interface State {
  patients: Patient[];
  initialHour: number;
  finalHour: number;
  currentDate: Date;
  appointments: Appointment[];
}

export interface UPDATE_APPOINTMENT_LIST {
  type: "UPDATE_APPOINTMENT_LIST";
  data: Appointment[];
}

export interface UPDATE_PATIENT_LIST {
  type: "UPDATE_PATIENT_LIST";
  data: Patient[];
}
export type Action = UPDATE_APPOINTMENT_LIST | UPDATE_PATIENT_LIST;
