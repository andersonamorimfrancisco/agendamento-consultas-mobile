import React from "react";
import * as Styles from "./styles";
import RNPickerSelect from "react-native-picker-select";

interface SelectorItem {
  label: string;
  value: string;
}

interface AppointmentAddPatientProps {
  onSelectorChange: Function;
  selectorItens: SelectorItem[];
}

const AppointmentAddPatient = ({
  onSelectorChange,
  selectorItens
}: AppointmentAddPatientProps): JSX.Element => (
  <Styles.AppointmentDetailAdd>
    <Styles.SelectContainer>
      <RNPickerSelect
        onValueChange={value => onSelectorChange(value)}
        items={selectorItens}
      />
    </Styles.SelectContainer>
    <Styles.AddButton>
      <Styles.AddButtonText>+</Styles.AddButtonText>
    </Styles.AddButton>
  </Styles.AppointmentDetailAdd>
);

export default AppointmentAddPatient;
