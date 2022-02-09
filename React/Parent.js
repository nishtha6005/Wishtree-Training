import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {
    constructor(props) {
      super(props);
      this.state = {Counter:0};
      console.log("Display .... constructor");
    }
    componentDidMount()
    {
        // calling api
        console.log("Display .... componentDidMount");
    }
    onCounter = ()=>{
        let { Counter } = this.state;
        Counter++;
        this.setState({Counter});
    }
    onShowChild = ()=>
    {
        let {showChild } = this.state;
        this.setState({showChild:!showChild});
    }
    componentDidUpdate()
    {
        console.log("Display ... componentDidUpdate");
    }
  render() {
    console.log("Display ... Render");
    let { Counter,showChild } = this.state;
    return(
            <>
            <h1>Display {Counter}</h1>
            <button className='btn btn-primary' onClick={this.onCounter}>Counter</button>
            <button className='btn btn-primary' onClick={this.onShowChild}>Show Child</button>
              {showChild ? <Child counter={Counter}/> : null}
            </>
        )
    }
}

export default Parent
