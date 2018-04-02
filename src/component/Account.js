import React from "react";
import { Box, Button } from "bloomer";
import { AuthContext } from "../AuthContext";
import { auth } from '../firebase';

const login = () => {
  auth.doSignInWithEmailAndPassword("email@email.com", "password")
}

const Account = () => 
  <AuthContext.Consumer>
    {authUser => 
      <Box>
        <Button isColor='primary' onClick={login}>Login</Button>
        <p>Hello {authUser && authUser.uid}</p>
      </Box>
    }
  </AuthContext.Consumer>

export default Account;
