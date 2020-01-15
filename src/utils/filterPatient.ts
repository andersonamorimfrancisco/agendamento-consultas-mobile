import { Patient, Appointment } from "../types";

const filterPatient = (patients: Patient[], appointment: Appointment) =>
  patients.reduce((prev, curr) => {
    const app = curr.appointments.reduce((prevv, currr) => {
      if (currr && currr.date.toString() === appointment.date.toString()) {
        return currr;
      }
      return prevv;
    }, null);
    if (app) {
      return curr;
    }
    return prev;
  }, null);

export default filterPatient;
