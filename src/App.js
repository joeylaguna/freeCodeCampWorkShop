import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import TaskList from './TaskList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    //{taskName: 'pizza', complete: false}
    let obj = {};
    obj.taskName = task;
    obj.complete = false;
    this.setState({
      tasks: this.state.tasks.concat(obj)
    });
  }

  completeTask(index) {
    console.log(index);
    let stateCopy = this.state.tasks.slice();
    stateCopy[index]['complete'] = !stateCopy[index]['complete'];
    this.setState({
      tasks: stateCopy
    })
  }

  removeTask(index) {
    let stateCopy = this.state.tasks.slice();
    stateCopy.splice(index, 1);
    this.setState({
      tasks: stateCopy
    });
  }

  render() {
    return (
      <div className="App">
        <Input addTask={this.addTask}/>
        <TaskList tasks={this.state.tasks} completeTask={this.completeTask} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default App;
