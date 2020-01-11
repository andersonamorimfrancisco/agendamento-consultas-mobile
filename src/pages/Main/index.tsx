import React, { useEffect, useCallback } from "react";
import { ScrollView, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services";
import * as actions from "../../store/actions";
import RNPickerSelect from "react-native-picker-select";
import { State, Patient } from "../../types";
import * as Styles from "./styles";
import { Dispatch } from "redux";

interface MainProps {}

const updateAppointmentList = (dispatch: Dispatch, week: number) =>
  api
    .post("/appointment/list", { week })
    .then(response => response.data)
    .then(data => dispatch(actions.updateAppointmentList(data)));

const removeAppointmentPatient = (appointmentId: string) =>
  api.post("/appointment/removepatient", { appointmentId });

const normalizeHour = (hour: number) => (hour > 9 ? ` ${hour}:00` : `0${hour}:00`);

const normalizePatient = (patient: Patient) => (patient ? patient.name : "");

const Main = ({}: MainProps): JSX.Element => {
  //
  const state = useSelector<State, State>(state => state);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    console.log("useEffect");
    api
      .get("/patient/list")
      .then(response => response.data)
      .then(data => dispatch(actions.updatePatientList(data)))
      .then(() => {
        const date = new Date();
        return api.post("/appointment/list", {
          day: date.getDate(),
          month: date.getMonth(),
          hour: 0
        });
      })
      .then(response => response.data)
      .then(data =>
        data.map(appointment => {
          dispatch(actions.setActiveWeekDay(appointment.weekDay));
          dispatch(actions.setActiveWeek(appointment.week));
          updateAppointmentList(dispatch, appointment.week);
        })
      )
      .catch(err => console.log(err));
  }, []);
  //
  return (
    <Styles.Container>
      <Styles.Title>{`week: ${state.activeWeek}`}</Styles.Title>
      <Styles.Title>{`weekDay: ${state.activeWeekDay}`}</Styles.Title>
      <Button
        title={"-"}
        onPress={() => {
          dispatch(actions.setActiveWeekDay(state.activeWeekDay - 1));
        }}
      />
      <Button
        title={"+"}
        onPress={() => {
          dispatch(actions.setActiveWeekDay(state.activeWeekDay + 1));
        }}
      />
      <ScrollView>
        <Styles.AppointmentList>
          {state.appointments
            .filter(appointment => appointment.weekDay === state.activeWeekDay)
            .map(appointment => (
              <Styles.Appointment key={appointment._id}>
                <Styles.AppointmentBody
                  onPress={() => dispatch(actions.setActiveAppointmentId(appointment._id))}
                >
                  <Styles.AppointmentHour>{normalizeHour(appointment.hour)}</Styles.AppointmentHour>
                  <Styles.AppointmentPatient>
                    {normalizePatient(appointment.patient)} {appointment.date}
                  </Styles.AppointmentPatient>
                </Styles.AppointmentBody>
                {state.activeAppointmentId !== appointment._id ? null : (
                  <Styles.AppointmentDetail>
                    {!appointment.patient ? (
                      <RNPickerSelect
                        onValueChange={value =>
                          api
                            .post("/appointment/setpatient", {
                              appointmentId: state.activeAppointmentId,
                              patientId: value
                            })
                            .then(() => updateAppointmentList(dispatch, state.activeWeek))
                            .catch(err => console.log(err))
                        }
                        items={state.patients.map(patient => ({
                          label: patient.name,
                          value: patient._id
                        }))}
                      />
                    ) : (
                      <Button
                        title={"Remover"}
                        onPress={() => {
                          removeAppointmentPatient(state.activeAppointmentId).then(() =>
                            updateAppointmentList(dispatch, state.activeWeek)
                          );
                        }}
                      />
                    )}
                  </Styles.AppointmentDetail>
                )}
              </Styles.Appointment>
            ))}
        </Styles.AppointmentList>
      </ScrollView>
    </Styles.Container>
  );
};

export default Main;
