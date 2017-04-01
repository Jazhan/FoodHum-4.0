import React, { Component } from 'react';
import logo from './images/FoodHUM.png';
import './styles/css/bootstrap.css';
import './styles/css/app.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-12 col-md-8 col-lg-12">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-success">Live into the future with better food choices</p>
        </div>
        <div className="col-xs-12 col-md-8 col-lg-6">
            <form>
                <div>
                    <label for="nameOfResturants">Name of Restaurant</label>
                    <div className="form-group">
                        <input type="text" id="nameOfResturants" placeholder="Name of Restaurant"/>
                    </div>
                    <label for="location">Location</label>
                    <div className="form-group">
                        <input type="text" id="location" placeholder="Location"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" ref="" placeholder="Submit"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Food Compost"/>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
