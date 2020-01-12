const normalizeHour = (hour: number) =>
  hour > 9 ? ` ${hour}:00` : `0${hour}:00`;

export default normalizeHour;
