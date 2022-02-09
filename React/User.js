import React, {Component} from'react';
import axios from 'axios';


class User extends Component{
    constructor(){
        super();
        this.state={user:[], city:[], selectedCityId:undefined}
    }

    componentDidMount(){
        axios.get("http://localhost:3001/user").then(response=>{
            console.log(response)
            console.log(response.data)
            this.setState({user:response.data}); // to populate user data in table
        });
        axios.get("http://localhost:3001/City").then(response=>{
            console.log(response)
            console.log(response.data)
            this.setState({city:response.data}) // to populate city data in dropdown
        })
        
    }

    changeHandler=(e)=>{
        let {value }=e.target;
        console.log(value)
        this.setState({selectedCityId:value})
    }

    render(){
        let {user,city,selectedCityId} = this.state;
        console.log("User data ",user)
        return(
        <>
        <h1>User</h1>
        <h2>Fill City</h2>
        <select onChange={this.changeHandler}>
            {city.map((val,ind)=>{
                return (
                <option key={ind} value={val.id}>{val.cityName}</option>
                )
            })}
        </select>
        <table className="table table-bordered table-striped table-hover text-center">
            <tbody>
                <tr className="">
                    <th> User Id</th>
                    <th> User Name</th>
                    <th> Password</th>
                    <th> Status </th>
                </tr>
                {user.map((value,index)=>{
                    return(
                        // <>
                        // {value.cityId == selectedCityId  && 
                        //     <tr key={index} >
                        //         <td> {value.id}</td>
                        //         <td> {value.username}</td>
                        //         <td > {value.password}</td>
                        //         <td > {value.status}</td>
                        //         <td>{value.cityId}</td>
                        //     </tr> 
                        // }
                        // </>  
                        parseInt(value.cityId)=== parseInt(selectedCityId) &&
                        (<tr key={index} >
                            <td> {value.id}</td>
                            <td> {value.username}</td>
                            <td > {value.password}</td>
                            <td > {value.status}</td>
                        </tr> )
                    )
                })}
            </tbody>
        </table>

        
        {/* <h3 className="text-center">User Component</h3>
        <Userdetails userRole='Admin'/> */}
        </>
        )
    }
}


export default User;