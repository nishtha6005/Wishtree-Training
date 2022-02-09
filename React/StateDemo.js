import React, {Component} from'react';


class Demo extends Component{
    constructor(){
        super();
        this.state={Counter:1, IncCounter:0};
        //this binding is used when handler function is a normal funtion and not arrow function
       // this.onClickHandler = this.onClickHandler.bind(this);
    }


    // To use this kind of function we have to bind this funtion in constructor
    // onClickHandler(){
    //     let {Counter} = this.state;
    //     Counter++;
    //     this.setState({Counter});
    //     console.log('Inc');
    // }


    // When using arrow function as a handler function no need to bind it in constructor
    onClickHandler = ()=>{
        let {Counter} = this.state;
        Counter++;
        this.setState({Counter});
        console.log('Inc');
    }

    onClickHandlerInc=(val)=>{
        let {IncCounter} = this.state;
        IncCounter+=val;
        this.setState({IncCounter})
    }

    render(){
        console.log('Render');
        return(
            
    // To use any state variable or handler function inside retun() of render() we need to use it in{}
            <>
            <h1>Count :  {this.state.Counter}</h1>
            
            {/* When handler function is called with (), handler function will be called 
            automatically when page is loaded (this is called invoking)  */}
            {/* <button onClick={this.onClickHandler()}>Increase</button> */}

             {/* When handler function is called without () or when we don't pass any value in handler function,
              handler function will be called  when button is clicked (this is called binding) */}
            <button onClick={this.onClickHandler}>Increase</button>

              {/* When passing value in handler funtion use arrow function and not the binding */}
            <h1>Increment by 5 :  {this.state.IncCounter}</h1>
            <button onClick={()=>{this.onClickHandlerInc(5)}}>Increase by 5</button>       
            
            </>
        )
    }
}


export default Demo;