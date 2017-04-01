import React, { Component } from 'react';
import logo from './images/FoodHUM.png';
import './styles/css/bootstrap.css';
import './styles/css/app.css'
import AddFoods from './AddFoods.js';

class App extends Component {

    handleSubmit() {
        <AddFoods/>
    }

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
                    <div>
                        <label for="Food-Compost">Food Compost </label>
                        <div className="form-group">
                          <input type="text" id="Food-Compost-location" placeholder="Food-Compost-location"/>
                  </div>
                  <div>
                        <label for="Grocey-Store">Grocery Story </label>
                        <div className="form-group">
                          <input type="text" id="Grocery-Store-location" placeholder="Grocery-Store-location" />
                      </div>

                      <button onClick={this.handleSubmit()}>
                          Add New Item
                      </button>
                    </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
  }

}
export default App;
