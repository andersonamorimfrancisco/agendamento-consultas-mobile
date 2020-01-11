import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Main from "./src/pages/Main";
import { Container, Title } from "./styles";

interface AppProps {}

const App = ({}: AppProps): JSX.Element => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
