import React from "react";
import Header from "./layout/Header";
import { Paper, Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Paper>Some content</Paper>
      </Container>
    </div>
  );
}

export default App;
