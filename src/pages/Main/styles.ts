import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  padding-top: ${StatusBar.currentHeight};
`;
export const Title = styled.Text``;

export const AppointmentList = styled.View`
  padding: 20px;
`;

export const Appointment = styled.View``;

export const AppointmentBody = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  border: 1px solid lightgrey;
`;

export const AppointmentHour = styled.Text`
  border-right-width: 1px;
  border-right-color: lightgrey;
  padding: 20px;
`;

export const AppointmentPatient = styled.Text`
  padding: 20px;
`;

export const AppointmentDetail = styled.View``;
