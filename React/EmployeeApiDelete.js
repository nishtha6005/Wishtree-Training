import React, { Component } from 'react'
import axios from 'axios'

class EmployeeApiDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Employee :[],
            alertMsg:''
      }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Employee").then(response=>{
            this.setState({Employee:response.data});
        });
    }

    deleteEmployee = (empid) =>{
        const URL = "http://localhost:4000/Employee/"+empid
        axios.delete(URL).then(response=>{
            // console.log
            console.log(response)
        })
    }
    
    render() {
        let {Employee, alertMsg}=this.state
        console.log(Employee)
        return (
        <>
        <div className="row">
            <div className="col-md-6 ">
            <table className="table table-bordered table-striped table-hover text-center">
                <tbody>
                    <tr>
                        <th> Employee Id </th>
                        <th> Employee Name </th>
                        <th> Salary </th>
                        <th> Delete </th>
                    </tr>
                    { Employee.map(item=>{
                        return (
                        <>
                            <tr key={item.id}>
                                <td> {item.id} </td>
                                <td> {item.employeeName} </td>
                                <td> {item.salary} </td>      
                                <td> <button className="btn btn-danger" onClick={(e)=>this.deleteEmployee(item.id)}> Delete</button></td>          
                            </tr>
                        </>
                        ) 
                        })
                    }          
                </tbody>
            </table>
            </div>
        </div>
        </>
     )
    }
 }
 
 export default EmployeeApiDelete
 