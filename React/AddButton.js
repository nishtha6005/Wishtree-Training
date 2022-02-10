import React, {Component} from "react";

class AddButton extends Component{
    constructor(){
        super();
        this.state = {total:0};
    }

    // To add the values of button which is clicked
    addButton =(value) =>{
        let {total} = this.state;
        total += value;
        this.setState({total});
    }
    
    render(){
        return(
            <>
            <h1>Total :{this.state.total}</h1>

            
            <button onClick={()=>{this.addButton(10)}}>10</button>
            <button onClick={()=>{this.addButton(20)}}>20</button>
            <button onClick={()=>{this.addButton(30)}}>30</button>
            <button onClick={()=>{this.addButton(40)}}>40</button>
            <button onClick={()=>{this.addButton(50)}}>50</button>
            </>
        )
    }
}

export default AddButton;