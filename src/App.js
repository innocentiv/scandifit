import React, { Component } from "react";
import { Container, Box } from "bloomer";
import Header from "./component/Header.js"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Box>Scandifit</Box>
      </Container>
    );
  }
}

export default App;
