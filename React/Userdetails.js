import React, {Component} from'react';


class Userdetails extends Component{
    constructor(props){
        super();
        console.log(props);
    }
    render(){
        let {userRole} = this.props;
        console.log(userRole)
        return(
            <>
            <h3 className="text-center">User Details Component</h3>
            <h5 className="text-danger text-center">User Role - {userRole}</h5>
            </>
        )
    }
}

export default Userdetails;