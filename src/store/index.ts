import { createStore } from "redux";
import { State, Action } from "../types";

const initialState: State = {
  activeAppointmentId: "",
  activeWeekDay: 0,
  activeWeek: 0,
  appointments: [],
  patients: []
};

const reducer = (state = initialState, action: Action) => {
  if (action.type === "UPDATE_PATIENT_LIST") {
    return { ...state, patients: action.data };
  }
  if (action.type === "UPDATE_APPOINTMENT_LIST") {
    return { ...state, appointments: action.data };
  }
  if (action.type === "SET_ACTIVE_WEEK") {
    return { ...state, activeWeek: action.data };
  }
  if (action.type === "SET_ACTIVE_WEEKDAY") {
    return { ...state, activeWeekDay: action.data };
  }
  if (action.type === "SET_ACTIVE_APPOINTMENTID") {
    if (action.data === state.activeAppointmentId) {
      return { ...state, activeAppointmentId: "" };
    }
    return { ...state, activeAppointmentId: action.data };
  }

  return state;
};

export default createStore(reducer);
