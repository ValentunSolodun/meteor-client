import React from 'react';
import withTracker from '../withTracker';
import {getList, removeTask, changeChecked} from "../Session";

let ToDoItem = (props) => {
  let {item, removeTask, changeChecked} = props;

  const removeHandler = () => {
    removeTask();
  }

  const changeCheckedHandler = (checked) => {
    changeChecked(checked)
  }

  return (
    <li>
      {item.title}
      <input checked={item.checked} onChange={(e) => changeCheckedHandler(e.target.checked)} type="checkbox"/>
      <button onClick={removeHandler.bind(null)}>Remove</button>
    </li>
  )
}

ToDoItem = withTracker((props) => {
  let {index} = props;
  return {
    item: getList()[index],
    removeTask: () => removeTask(index),
    changeChecked: checked => changeChecked(index, checked),
  }
})(ToDoItem);

export {ToDoItem};
