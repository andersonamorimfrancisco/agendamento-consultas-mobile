import { Patient } from "../types";

const _date = new Date();
const date = new Date(_date.getFullYear(), _date.getMonth(), 15, 10, 0, 0, 0);
const patients: Patient[] = [
  {
    name: "Anderson Amorim",
    appointments: [
      { date: date.toTimeString(), hour: 10, day: 15, month: 0, year: 2020 }
    ]
  }
];

export default patients;
