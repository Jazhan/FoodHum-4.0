import React, { Component } from 'react';
import logo from './images/FoodHUM.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Live into the future with better food choices</p>
        </div>
        <div>
            <form>
                <div className="row">
                    <div className="medium-6">
                        <input type="text" placeholder="Name of Restaurant"/>
                    </div>
                    <div className="medium-6">
                        <input type="text" placeholder="Location"/>
                    </div>
                    <div className="medium-6">
                        <input type="submit" ref="" placeholder="Submit"/>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
