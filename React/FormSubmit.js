import React, {Component} from "react";

class FormSubmit extends Component{
    constructor(props){
        super(props);
    }

    // componentDidMount=()=>{
    //     document.body.style.backgroundColor=this.props.bg
    // }

    render(){
        let {text,bg} = this.props;
        console.log(bg)
        return(
            <>
            <h1 className={'text-center '+bg}  >{text}</h1>
            </>
        )
    }
}

export default FormSubmit;