import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import patients from "../../store/patients";
import * as utils from "../../utils";
import * as Styles from "./styles";
import { State } from "../../types";

import Appointment from "../../components/Appointment";
import CurrentDayBar from "../../components/CurrentDayBar";
import WeekBar from "../../components/WeekBar";

interface MainProps {}

const Main = ({}: MainProps): JSX.Element => {
  const state = useSelector<State, State>(state => state);
  const { initialHour, finalHour, currentDate } = state;

  return (
    <Styles.Container>
      <CurrentDayBar currentDate={currentDate} />
      <WeekBar currentDate={currentDate} />
      <ScrollView>
        <Styles.AppointmentList>
          {utils
            .createAppointmentsList({ initialHour, finalHour, currentDate })
            .map(appointment => (
              <Appointment
                key={`${appointment.hour}}`}
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
