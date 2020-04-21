import React from "react";
import Header from "./layout/Header";
import { Paper, Container } from "@material-ui/core";
import VmMessages from "./components/VmMessages/Messages";
// Redux
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Paper>
          <VmMessages />
        </Paper>
      </Container>
    </Provider>
  );
}

export default App;
