import React, { useEffect } from "react";
import { ScrollView, Button } from "react-native";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services";
import * as actions from "../../store/actions";
import * as Styles from "./styles";
import { State } from "../../types";

import AppointmentBody from "../../components/AppointmentBody";
import AppointmentAddPatient from "../../components/AppointmentAddPatient";
import AppointmentDetail from "../../components/AppointmentDetail";
import FilterBar from "../../components/FilterBar";
import WeekBar from "../../components/WeekBar";

import utils from "../../utils";

interface MainProps {}

const updateAppointmentList = (dispatch: Dispatch, week: number) =>
  api
    .post("/appointment/list", { week })
    .then(response => response.data)
    .then(data => dispatch(actions.updateAppointmentList(data)));

const updatePatientList = (dispatch: Dispatch) =>
  api
    .get("/patient/list")
    .then(response => response.data)
    .then(data => dispatch(actions.updatePatientList(data)));

const removeAppointmentPatient = (appointmentId: string) =>
  api.post("/appointment/removepatient", { appointmentId });

const Main = ({}: MainProps): JSX.Element => {
  //
  const state = useSelector<State, State>(state => state);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    console.log("useEffect");
    updatePatientList(dispatch)
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
      <Styles.Header>
        <Styles.Title>{`week: ${state.activeWeek}`}</Styles.Title>
        <Styles.Title>{`weekDay: ${state.activeWeekDay}`}</Styles.Title>
      </Styles.Header>

      <FilterBar
        label1={utils.normalizeAvailabilityFilter(state.availabilityFilter)}
        onClick1={() => {
          dispatch(actions.setAvailabilityFilter());
        }}
      />
      <WeekBar
        initialDay={state.appointments.reduce((prev, curr) => {
          if (curr.weekDay === 0 && curr.hour === 0) {
            return curr.day;
          }
          return prev;
        }, 0)}
      />
      <ScrollView>
        <Styles.AppointmentList>
          {state.appointments
            .filter(appointment => appointment.weekDay === state.activeWeekDay)
            .filter(appointment =>
              utils.filterAppointmentAvailability(
                appointment,
                state.availabilityFilter
              )
            )
            .map(appointment => (
              <Styles.Appointment key={appointment._id}>
                <AppointmentBody
                  hour={utils.normalizeHour(appointment.hour)}
                  patient={utils.normalizePatient(appointment.patient)}
                  onPress={() =>
                    dispatch(actions.setActiveAppointmentId(appointment._id))
                  }
                />

                {state.activeAppointmentId !== appointment._id ? null : (
                  <Styles.AppointmentDetail>
                    {!appointment.patient ? (
                      <>
                        <AppointmentAddPatient
                          onSelectorChange={patientId =>
                            api
                              .post("/appointment/setpatient", {
                                appointmentId: state.activeAppointmentId,
                                patientId: patientId
                              })
                              .then(() =>
                                updateAppointmentList(
                                  dispatch,
                                  state.activeWeek
                                )
                              )
                              .catch(err => console.log(err))
                          }
                          selectorItens={state.patients.map(patient => ({
                            label: patient.name,
                            value: patient._id
                          }))}
                        />
                        <Styles.AppointmentDetailCreate>
                          <Styles.AppointmentDetailCreateText>
                            Ok
                          </Styles.AppointmentDetailCreateText>
                        </Styles.AppointmentDetailCreate>
                      </>
                    ) : (
                      <>
                        <AppointmentDetail appointment={appointment} />
                        <Button
                          title={"Remover"}
                          onPress={() => {
                            removeAppointmentPatient(
                              state.activeAppointmentId
                            ).then(() =>
                              updateAppointmentList(dispatch, state.activeWeek)
                            );
                          }}
                        />
                      </>
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
