import React, { Component } from 'react'
import axios from 'axios'

class EmployeeApiPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Employee :{id:'',employeeName:'',salary:''},
            alertMsg:''
      }
    }

    changeHandler =(e)=>{
        let {name, value} = e.target;
        let {Employee}= this.state;
        this.setState({Employee:{...Employee,[name]:value}});
    }

    addEmployee = (e) =>{
        e.preventDefault();
        const URL = "http://localhost:4000/Employee"
        axios.post(URL,this.state.Employee).then(response =>{
            console.log(response);
            if (response.statusText === "Created")
            this.setState({alertMsg : 'Employee Added Successfuly !!!'})
        })
    }
    
    render() {
        let {Employee, alertMsg}=this.state
        return (
        <>
        <div className="row">
            <div className="col-md-6 ">
                <div className="border border-secondary m-3 p-2 text-center">
                    <h3 > Add Employee Details</h3>
                    <form method="Post" onSubmit={(e)=>{this.addEmployee(e)}}>
                        <div className="form-group m-3">
                            <input type='text' className="form-control" name='id' value={Employee.id}
                            onChange={this.changeHandler} placeholder="Emp Id"/>
                        </div>
                        <div className="form-group m-3">
                            <input type="text" className="form-control" name="employeeName" value={Employee.employeeName}
                            onChange={this.changeHandler} placeholder="Emp Name"/>
                        </div>
                        <div className="form-group m-3">
                            <input type="text" className="form-control" name="salary" value={Employee.salary}
                            onChange={this.changeHandler} placeholder="Salary"/>
                        </div>
                        <button className="btn btn-success btn-lg my-3 mx-5 px-5 " 
                            type='submit'>Add Employee</button>
                        { <div className=" alert-success alert-dismissible fade show" role="alert"> 
                            <strong>{alertMsg}</strong>
                            </div> }
                    </form>            
                </div>
            </div>
        </div>
        </>
     )
    }
 }
 
 export default EmployeeApiPost
 