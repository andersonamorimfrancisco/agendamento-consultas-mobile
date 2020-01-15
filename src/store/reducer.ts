import { State, Action } from "../types";
import initialState from "./initialState";

const reducer = (state: State = initialState, action: Action) => {
  if (action.type === "UPDATE_APPOINTMENT_LIST") {
    return { ...state, appointments: action.data };
  }
  return state;
};

export default reducer;
