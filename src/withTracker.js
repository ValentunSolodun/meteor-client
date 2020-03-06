import React from 'react'
import {connect} from 'react-redux';


let withTracker = callback => WrappedComponent => {
  return (props) => {
    let C = connect(state => state.main, null)(WrappedComponent);
    return <C {...callback(props)}/>
  }
}

export default withTracker;
