import React, { Component } from 'react'

export class Child extends Component {
    constructor(props) {
      super(props);
      
      console.log("Child ... Constructor");
    }
    componentDidMount()
    {
        // calling api
        console.log("Child .... componentDidMount");
    }
    shouldComponentUpdate(props1)
    {
        console.log(props1)
        return true;
    }
    
    componentWillUnmount(){
        console.log("Child ... componentWillUnmount");
    }
    componentDidUpdate()
    {
        console.log("Child ... componentDidUpdate");
    }
  render() {
    let { counter } = this.props;
    console.log("Child ...render");
       return(
            <>
              <h1>Display Details Counter {counter}</h1>
            </>
        )
    }
}

export default Child
