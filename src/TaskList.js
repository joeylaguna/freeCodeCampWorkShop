import React, { Component } from 'react';
import Task from './Task';
class TaskList extends Component {
  //this.props.tasks
  render() {
    return (
      <div>
        {this.props.tasks.map((item, key) => {
          return(
            <Task task={item} index={key} completeTask={this.props.completeTask} removeTask={this.props.removeTask}/>
          )
        })}
      </div>
    )
  }
}

export default TaskList;