import React, {Component} from "react";
import { Box, Button, Field, Label, Control, Input, Help } from "bloomer";
import { AuthContext } from "../AuthContext";
import { auth } from '../firebase';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }
  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
  }

  signin = (event) => {
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      this.setState({error});
    });
    event.preventDefault();
  }
  
  signout = () => {
    auth.doSignOut()
  }
  
  LoginForm = () =>
    <form onSubmit={this.signin}>
      <Field>
        <Label>email</Label>
        <Control>
          <Input type="text" placeholder='email' value={this.state.email} onChange={this.handleEmail}/>
        </Control>
      </Field>
      <Field>
        <Label>password</Label>
        <Control>
          <Input type="password" value={this.state.password} onChange={this.handlePassword}/>
        </Control>
      </Field>
      <Field>
        <Control>
          <Button type="submit" isColor='primary'>Login</Button>
        </Control>
      </Field>
      { this.state.error && <Help isColor='danger'>{this.state.error.message}</Help> }
    </form>
  
  LoggedUser = ({authUser}) =>
    <div>
      <p>Hello {authUser.email}</p>
      <Field>
        <Control>
          <Button isColor='primary' onClick={this.signout}>Logout</Button>
        </Control>
      </Field>
    </div>

  render() {
    return (
      <AuthContext.Consumer>
        {authUser => 
          <Box>
            {authUser ? <this.LoggedUser authUser={authUser} /> : <this.LoginForm />}
          </Box>
        }
      </AuthContext.Consumer>
    );
  }
}
  

export default Account;
