import React, {Component} from'react';

class UserTable extends Component{
    constructor(){
        super();
        this.state = {UserData:[{userid:101,username:'Hiral',status:'Active'},
        {userid:102,username:'Arun',status:'Disabled'},
        {userid:103,username:'Kriti',status:'Disabled'},
        {userid:104,username:'Preet',status:'Active'},
        {userid:151,username:'Khush',status:'Active'}]};

       
    }

    clickHandler(status){
        
        this.setState({newStatus:status});
    }

    render(){

        return(
            <>
            <h1 className='text-center'> User Status : {this.state.newStatus} </h1>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <th> User ID</th>
                        <th> Username</th>
                        <th> Select</th>
                    </tr>
                    {this.state.UserData.map((value,index) =>{

                        return(
                            <tr key={index}>
                                <td>{value.userid}</td>
                                <td>{value.username}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={()=>{this.clickHandler(value.status)}}>
                                        Show Status</button>
                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
            </>
        )
    }

}

export default UserTable;