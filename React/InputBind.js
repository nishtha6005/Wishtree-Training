import React, {Component} from "react";

class InputBind extends Component{
    constructor(){
        super();
        this.state = {fname:'',lname:''};;
    }

    onFirstNameChange =(event) =>{
        // event.target tells which DOM element is targeted
        //console.log(event.target); name refer to name parameter of input field
        let {name, value} = event.target;
        console.log(`${name} = ${value}`);
        if (name==='fname')
            this.setState({fname:value});
        else if (name==='lname')
            this.setState({lname:value})
    }
    
    render(){
        let {fname,lname} = this.state
        return(
            <>
            <br/>
            {/* When working with <input> we need to bind onChange event and it has a default paramenter
            called as event */}
            First Name : <input type='text' name='fname' value={this.state.fname} 
                        onChange={this.onFirstNameChange}/><br/><br/>
            Last Name : <input type='text' name='lname' value={this.state.lname} 
                        onChange={this.onFirstNameChange}/><br/><br/>

            <button>Submit</button>
            </>
        )
    }
}

export default InputBind;