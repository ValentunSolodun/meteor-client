import React from 'react';
import {ToDoItem} from "../toDoItem/toDoItem.js";
import withTracker from '../../withTracker';
import {Session, addTask} from "../../Session";
// import {getList, addTask, removeTask, changeChecked} from '../../../api/links';
// import {getList, addTask, removeTask, changeChecked} from "../../store";

class ToDoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let {list, addTask} = this.props;
    return (
      <React.Fragment>
        <ul>
          {list.map((item, i) => <ToDoItem index={i} key={i}/>)}
        </ul>
        <button onClick={() => addTask(prompt('', 'Task 1'))}>Add task
        </button>
      </React.Fragment>
    )
  }


};

ToDoList = withTracker((props) => {
  Session.set('list', [
    {id: 1, title: "Task 1", checked: false},
    {id: 2, title: "Task 2", checked: false},
    {id: 3, title: "Task 3", checked: false}
  ]);
  // setTimeout(() => {
  //   Session.set('name', 'main name 2');
  // }, 2000);
  return {
    // state1: Session.get('name'),
    addTask,
    // list: getList()
  }
})(ToDoList);
export default ToDoList;

