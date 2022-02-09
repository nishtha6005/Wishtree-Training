import React, {Component} from "react";

class Checkbox extends Component{
    constructor(){
        super();
        this.state = {Checked:false};;
    }

    onCheck =() =>{
        
        let {Checked} = this.state;
        this.setState({Checked:!Checked});
       // this.setState({Checked:!this.state.Checked});
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