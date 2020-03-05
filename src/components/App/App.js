import React from 'react';
import logo from '../../logo.svg';
import ToDoList from "../toDoList/toDoList";
import {Provider} from 'react-redux'
import {store} from '../../store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Welcome to To Do App</h1>
        <ToDoList index={'item'}/>
      </div>
    </Provider>
  );
}

export default App;
