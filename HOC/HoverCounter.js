import React, { Component } from 'react'
import HOC from './HOC'

export class HoverCounter extends Component {
  render() {
    let {count, incrementCount} = this.props
    return (
      <>
      <h2 onMouseOver={incrementCount}>Clicked {count} times</h2>
        
      </>
    )
  }
}

export default HOC(HoverCounter)
