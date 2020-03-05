import React, {useState} from 'react'
import {connect} from 'react-redux';
import {compose} from "recompose";


let withTracker = callback => WrappedComponent => {
  return (props) => {
    let C = connect(state => state, null)(WrappedComponent);
    return <C {...callback(props)}/>
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {}
// }
//
// const mapStateToProps = (state) => {
//   return {
//     generalState: state.test,
//   }
// }
//
// const composeFieldWrapper = compose(
//   connect(mapStateToProps, null),
//   withTracker
// )

export default withTracker;
