import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid lightgrey;
`;

export const Title = styled.Text`
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  border: 1px solid lightgrey;
  width: 22%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
`;
