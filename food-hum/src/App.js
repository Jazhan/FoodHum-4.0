import React, { Component } from 'react';
import logo from './images/FoodHUM.png';
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

class App extends Component {

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

  render() {
      return (
          <div>
              
          </div>
      );
  }
}

export default App;
