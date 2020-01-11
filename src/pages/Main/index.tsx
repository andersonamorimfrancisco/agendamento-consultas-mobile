import React, { useEffect } from "react";
import { ScrollView, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services";
import * as actions from "../../store/actions";
import { State, Patient, Appointment } from "../../types";
import * as Styles from "./styles";
import { Dispatch } from "redux";

import AppointmentBody from "../../components/AppointmentBody";
import AppointmentAddPatient from "../../components/AppointmentAddPatient";
import AppointmentDetail from "../../components/AppointmentDetail";
import FilterBar from "../../components/FilterBar";

interface MainProps {}

const normalizeAvailabilityFilter = (filter: number) => {
  if (filter === 1) {
    return "Ocupados";
  }
  if (filter === 2) {
    return "Livres";
  }
  return "Todos";
};

const filterAppointmentAvailability = (
  appointment: Appointment,
  filter: number
) => {
  if (filter === 0) {
    return appointment;
  }
  if (filter === 1 && appointment.patient) {
    return appointment;
  }
  if (filter === 2 && !appointment.patient) {
    return appointment;
  }
};

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

const normalizeHour = (hour: number) =>
  hour > 9 ? ` ${hour}:00` : `0${hour}:00`;

const normalizePatient = (patient: Patient) => (patient ? patient.name : "");

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
      <Styles.Filter>
        <FilterBar
          label1={normalizeAvailabilityFilter(state.availabilityFilter)}
          onClick1={() => {
            dispatch(actions.setAvailabilityFilter());
          }}
        />
      </Styles.Filter>
      <ScrollView>
        <Styles.AppointmentList>
          {state.appointments
            .filter(appointment => appointment.weekDay === state.activeWeekDay)
            .filter(appointment =>
              filterAppointmentAvailability(
                appointment,
                state.availabilityFilter
              )
            )
            .map(appointment => (
              <Styles.Appointment key={appointment._id}>
                <AppointmentBody
                  hour={normalizeHour(appointment.hour)}
                  patient={normalizePatient(appointment.patient)}
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
