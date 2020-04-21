import React from "react";
import Header from "./layout/Header";
import { Paper, Container } from "@material-ui/core";
import VmMessages from "./components/VmMessages/Messages";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Paper>
          <VmMessages />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
