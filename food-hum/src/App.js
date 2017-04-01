import React, { Component } from 'react';
import logo from './images/FoodHUM.png';

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
                <div class="row">
                    <div class="medium-6">
                            <input type="text" placeholder="Name of Restaurant"/>
                    </div>
                    <div class="medium-6">
                        <input type="text" placeholder="Location"/>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
