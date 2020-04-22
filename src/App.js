import React from "react";
import Header from "./layout/Header";
import { Paper, Container } from "@material-ui/core";
// Redux
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import Voicemail from "./components";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Paper>
          <Voicemail />
        </Paper>
      </Container>
    </Provider>
  );
}

export default App;
