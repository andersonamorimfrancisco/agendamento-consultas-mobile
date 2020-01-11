import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  padding-top: ${StatusBar.currentHeight};
`;
export const Title = styled.Text``;

export const Header = styled.View`
  background-color: #34495e;
`;

export const Filter = styled.View``;

export const AppointmentList = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Appointment = styled.View`
  margin-top: 10px;
`;

export const AppointmentDetail = styled.View``;

export const AppointmentDetailCreate = styled.View``;

export const AppointmentDetailCreateText = styled.Text``;
