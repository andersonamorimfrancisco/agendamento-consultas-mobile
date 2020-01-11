import React from "react";
import RNPickerSelect from "react-native-picker-select";

import { Container, Title } from "./styles";

interface PickerSelectProps {
  itens: [];
  onChange: Function;
}

const PickerSelect = ({ itens, onChange }: PickerSelectProps): JSX.Element => (
  <RNPickerSelect onValueChange={value => onChange()} items={itens} />
);

export default PickerSelect;
