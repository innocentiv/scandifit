import React, { Component } from "react";
import { Container } from "bloomer";
import { AuthContext } from "./AuthContext";
import { firebase } from './firebase';
import Header from "./component/Header";
import Account from "./component/Account";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.authUser}>
        <Container>
          <Header />
          <Account />
        </Container>
      </AuthContext.Provider>
    );
  }
}

export default App;
