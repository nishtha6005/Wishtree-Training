import React, {Component} from "react";

class Checkbox extends Component{
    constructor(){
        super();
        this.state = {Checked:false};;
    }

    // To change the checked state of a checkox on button click
    onCheck =() =>{
        let {Checked} = this.state;
        this.setState({Checked:!Checked});
    }
    
    render(){
        return(
            <>
            <br/>
            Checkbox <input type='checkbox' checked={this.state.Checked}/><br/>
            <button onClick={this.onCheck}>Check</button>
            </>
        )
    }
}

export default Checkbox;