import React, { Component } from "react";

class Keyevent extends Component{
    constructor(){
        super();
    }
    onKeyDownHandler=(e)=>{
        console.log(" onKeyDownHandler ",e.target);
        console.log(" onKeyDownHandler ",e.key);
        console.log(" onKeyDownHandler ",e.keyCode);
    }

    onKeyUpHandler=(e)=>{
        console.log(" onKeyUpHandler ",e.target);
        console.log(" onKeyUpHandler ",e.key);
        console.log(" onKeyUpHandler ",e.keyCode);   
    }
    onKeyPressHandler=(e)=>{
        console.log(" onKeyPressHandler ",e.target);
        console.log(" onKeyPressHandler ",e.key);
        console.log(" onKeyPressHandler ",e.keyCode);   
    }

    render(){
        return(
            <>
            Firstname : <input type='text' name='name' onKeyDown={this.onKeyDownHandler} onKeyUp={this.onKeyUpHandler}
                        onKeyPress={this.onKeyPressHandler}/>
            </>
        )
    }
}

export default Keyevent;