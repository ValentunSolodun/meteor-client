import React, {useState} from 'react'
import {connect} from 'react-redux';


let withTracker = callback => WrappedComponent => {
  return (props) => {
    let C = connect(state => state.test, null)(WrappedComponent);
    return <C {...callback(props)}/>
  }
}

export default withTracker;
