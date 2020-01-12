import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid lightgrey;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const WeekDay = styled.TouchableOpacity`
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: bold;
`;

export const Number = styled.Text`
  border: 1px solid lightgrey;
  padding: 4px;
  border-radius: 4px;
`;

export const ActiveNumber = styled.Text`
  border: 1px solid lightgrey;
  padding: 4px;
  border-radius: 4px;
  background-color: lightgrey;
`;

export const Title = styled.Text``;
