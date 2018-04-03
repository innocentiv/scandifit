import React, {Component} from "react";
import { Box, Button} from "bloomer";
import { AuthContext } from "../AuthContext";
import { db } from "../firebase"
import "./WeightUpdater.css";

class WeightUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0
    };
  }

  add = () => {
    this.setState({weight: Math.round(this.state.weight * 10 + 1) / 10})
  }
  
  subtract = () => {
    this.setState({weight: Math.round(this.state.weight * 10 - 1) / 10})
  }

  save = (uid) => {
    db.doSaveUserWeight(this.state.weight, uid)
  }

  undo = (uid) => {
    db.doUndoLastUserWeight(uid)
  }

  render() {
    return (
      <AuthContext.Consumer>
        {authUser => authUser &&
          <Box>
            <div className="weightupdater__control">
              <Button isColor='dark' onClick={this.subtract}>-</Button>
              <Box>{this.state.weight} kg</Box>
              <Button isColor='dark' onClick={this.add}>+</Button>
            </div>
            <div className="weightupdater__action">
              <Button isColor='primary' onClick={() => this.save(authUser.uid)}>Save</Button>
              <Button isColor='warning' onClick={() => this.undo(authUser.uid)}>Undo Last</Button>
            </div>
          </Box>
        }
      </AuthContext.Consumer>
    );
  }
}
  

export default WeightUpdater;
