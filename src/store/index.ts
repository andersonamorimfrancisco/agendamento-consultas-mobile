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

  if (action.type === "SET_ACTIVE_WEEK_AND_WEEKDAY") {
    return {
      ...state,
      activeWeek: action.data.week,
      activeWeekDay: action.data.weekDay
    };
  }

  if (action.type === "SET_ACTIVE_APPOINTMENTID") {
    if (action.data === state.activeAppointmentId) {
      return { ...state, activeAppointmentId: "" };
    }
    return { ...state, activeAppointmentId: action.data };
  }

  //=============================================================

  if (action.type === "SET_APPOINTMENT_PATIENT") {
    const newAppointments = state.appointments.map(appointment =>
      appointment._id === action.data.appointmentId
        ? {
            ...appointment,
            patient: state.patients.reduce((prev, curr) => {
              if (curr._id === action.data.patientId) {
                return curr;
              }
              return prev;
            })
          }
        : appointment
    );
    return { ...state, appointments: newAppointments };
  }

  return state;
};

export default createStore(reducer);
