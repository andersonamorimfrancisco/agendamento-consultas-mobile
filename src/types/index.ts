export interface Patient {
  _id: string;
  contactPhoneNumber: string;
  enable: boolean;
  name: string;
  phoneNumber: string;
}

export interface Appointment {
  _id: string;
  category: string;
  date: string;
  day: number;
  enable: boolean;
  hour: number;
  month: number;
  week: number;
  weekDay: number;
  year: number;

  patient: Patient | null;
  fixedPatient: Patient | null;
}

export interface State {
  activeAppointmentId: string;
  activeWeek: number;
  activeWeekDay: number;
  appointments: Appointment[];
  patients: Patient[];
}
export interface Action {
  type: string;
  data: any;
}
