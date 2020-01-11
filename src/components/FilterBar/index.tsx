import React from "react";
import * as Styles from "./styles";

interface FilterBarProps {
  onClick1: Function;
  label1: string;
}

const FilterBar = ({ onClick1, label1 }: FilterBarProps): JSX.Element => (
  <Styles.Container>
    <Styles.Button onPress={() => onClick1()}>
      <Styles.Title>{label1}</Styles.Title>
    </Styles.Button>
    <Styles.Button>
      <Styles.Title>FilterBar</Styles.Title>
    </Styles.Button>
    <Styles.Button>
      <Styles.Title>FilterBar</Styles.Title>
    </Styles.Button>
    <Styles.Button>
      <Styles.Title>FilterBar</Styles.Title>
    </Styles.Button>
  </Styles.Container>
);

export default FilterBar;
