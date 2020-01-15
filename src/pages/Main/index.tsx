import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import patients from "../../store/patients";
import CurrentDayBar from "../../components/CurrentDate";
import Appointment from "../../components/Appointment";
import * as actions from "../../store/actions";
import * as utils from "../../utils";
import * as Styles from "./styles";
import { State } from "../../types";

interface MainProps {}

const Main = ({}: MainProps): JSX.Element => {
  const state = useSelector<State, State>(state => state);
  const dispatch = useDispatch();
  const { initialHour, finalHour, currentDate, appointments } = state;

  return (
    <Styles.Container>
      <CurrentDayBar currentDay={currentDate} />
      <ScrollView>
        <Styles.AppointmentList>
          {utils
            .createAppointmentsList({ initialHour, finalHour, currentDate })
            .map(appointment => (
              <Appointment
                key={`${appointment.date.getHours()}}`}
                data={appointment}
                patient={utils.filterPatient(patients, appointment)}
              />
            ))}
        </Styles.AppointmentList>
      </ScrollView>
    </Styles.Container>
  );
};

export default Main;
