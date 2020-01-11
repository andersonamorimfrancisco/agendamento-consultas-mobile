import React from "react";
import * as Styles from "./styles";

interface ComponentProps {}

const Component = ({}: ComponentProps): JSX.Element => (
  <Styles.Container>
    <Styles.Title>Component</Styles.Title>
  </Styles.Container>
);

export default Component;
