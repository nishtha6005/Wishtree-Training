import React, { Component } from 'react'
import HOC from './HOC'

export class ClickCounter extends Component {
  render() {
      let {count, incrementCount} = this.props
    return (
      <>
      <button onClick={incrementCount}>Clicked {count} times</button>
        
      </>
    )
  }
}

export default HOC(ClickCounter)
