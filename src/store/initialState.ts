import { State } from "../types";
import patients from "./patients";

const initialState: State = {
  patients,
  initialHour: 9,
  finalHour: 21,
  currentDate: new Date(),
  appointments: []
};

export default initialState;
