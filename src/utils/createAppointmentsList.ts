import { Appointment, Patient } from "../types";

interface CreateAppointmentsList {
  initialHour: number;
  finalHour: number;
  currentDate: Date;
}

const creteBasicDate = (currentDate: Date) =>
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    0,
    0,
    0,
    0
  );

const createAppointmentsList = ({
  initialHour,
  finalHour,
  currentDate
}: CreateAppointmentsList) => {
  return new Array(finalHour - initialHour).fill("").map(
    (item, index): Appointment => {
      const date = creteBasicDate(currentDate);
      date.setHours(index + initialHour);
      return {
        hour: date.getHours(),
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        date: date.toTimeString()
      };
    }
  );
};

export default createAppointmentsList;
