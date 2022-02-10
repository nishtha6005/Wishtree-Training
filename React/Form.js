import React, {Component} from "react";
import FormSubmit from "./FormSubmit";

class Form extends Component{
    constructor(){
        super();
        this.state={Email:'', Password:'', Text:'',Background:''}
    }

    onChangeHandler= (event)=>{
        let {name, value} = event.target;
        console.log(`${name} = ${value}`);
        if (name==='email')
            this.setState({Email:value});
        else if (name==='password')
            this.setState({Password:value})
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        let {Email, Password,Text,Backgroud} =this.state;
        if (Email.length === 0 || Password.length==0)
            this.setState({Text:'Please Enter email and password', Background:'bg-danger'})
        else if (Password.length < 6)
        {
            this.setState({Text:'Password must be atleast 6 characters long', Background:'bg-warning'})
        }
        else
            this.setState({Text:'Submitted Successfully!!',Background:'bg-success'})
    } 

    render(){
        let {Email, Password, Text,Background} = this.state;
        return(
            <>          
            <FormSubmit text={Text} bg={Background} /> <br/>
            <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" name='email' value={Email} 
                    onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={Password}
                    onChange={this.onChangeHandler}/>
                </div>
                <button className="btn btn-primary" >Submit</button>
            </form>            
            </>
        )
    }
}

export default Form;