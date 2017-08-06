import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.item);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' />
        </form>
      </div>
    )
  }
}

export default Input;