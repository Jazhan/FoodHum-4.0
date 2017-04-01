import React, { Component } from 'react';
import './styles/css/bootstrap.css';
import './styles/css/app.css'

class AddFoods extends Component {
    handleSubmit(event) {
        event.preventDefault()
        var description = this.refs.description.getDOMNode().value
        this.refs.description.getDOMNode().value = ''
        alert('trying to create an item with description ' + description)
    }

    render() {
        return (
        <div>
            <form id="add_food" onSubmit={this.handleSubmit} className="form-inline">
                <div className="form-group">
                    <input id="food" ref="food" type='text' placeholder='New Item' />:
                    <input id="numberOfFoods" ref="numberOfFoods" type='text' placeholder='Number of Items' />
                </div>
            </form>
        </div>
        );
    }
}

export default AddFoods;