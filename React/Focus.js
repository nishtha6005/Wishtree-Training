import React from 'react'

import React, { Component } from 'react'

class Focus extends Component {
  constructor(props) {
    super(props)
  }
  
  focusHandler=(event)=>{
    event.target.style.backgroundColor='green'
  }

  blur=(event)=>{
    event.target.style.backgroundColor='red'
  }
  
  render() {
    return (
    <>
      <div className='form-group'>
        Name <input type='text' className='form-control' onFocus={this.focusHandler} onBlur={this.blurHandler}/>  
      </div>
    </>
    )
  }
}

export default Focus


