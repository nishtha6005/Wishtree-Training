import React, {Component} from'react';

class Table extends Component{
    constructor(){
        super();
        this.state = {UserData:[{userid:101,username:'Hiral',status:'Active'},
        {userid:102,username:'Arun',status:'Disabled'},
        {userid:103,username:'Kriti',status:'Disabled'},
        {userid:104,username:'Preet',status:'Active'},
        {userid:151,username:'Khush',status:'Active'}],newStatus:''}
    }

    clickHandler(status){

        this.setState({newStatus:status});
        console.log(this.state.newStatus);
    }

    render(){

        return(
            <>
            <h1>Status : {this.state.newStatus} </h1>
            <table >
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
                                    <button onClick={()=>{this.clickHandler(value.status)}}> Show Status</button>
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

export default Table;