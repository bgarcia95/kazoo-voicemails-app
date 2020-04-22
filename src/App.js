import React from "react";
import Header from "./layout/Header";
import { Paper, Container } from "@material-ui/core";
import VmMessages from "./components/VmMessages/Messages";
// Redux
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import BoxSelection from "./components/VmBoxes/BoxSelection";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Paper>
          <BoxSelection />
          <VmMessages />
        </Paper>
      </Container>
    </Provider>
  );
}

export default App;
