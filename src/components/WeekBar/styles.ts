
import  { StyledFunction } from "styled-components"
import styled from "styled-components/native";
import { View } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

interface Props {
  background: string;
}

export const Item = styled.View`
  border: 1px solid lightgrey;
  border-radius: 4px;
  width: 13%;
  align-items: center;`;
export const Title = styled.Text``;



interface YourProps {
  invalid: boolean
}

const input: StyledFunction<Props> = styled.Text``
