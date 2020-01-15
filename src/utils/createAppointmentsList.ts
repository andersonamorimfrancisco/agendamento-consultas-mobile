import { Appointment, Patient } from "../types";

interface CreateAppointmentsList {
  initialHour: number;
  finalHour: number;
  currentDate: Date;
}

const createAppointmentsList = ({
  initialHour,
  finalHour,
  currentDate
}: CreateAppointmentsList) => {
  return new Array(finalHour - initialHour).fill("").map(
    (item, index): Appointment => {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        0,
        0,
        0,
        0
      );
      date.setHours(index + initialHour);
      return { date };
    }
  );
};

export default createAppointmentsList;
