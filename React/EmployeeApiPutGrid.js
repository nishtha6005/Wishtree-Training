import React, { Component } from 'react'
import axios from 'axios'

class EmployeeApiPutGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Employee :{id:'',employeeName:'',salary:''},
            EmpList :[],
            alertMsg:''
      }
    }

    getEmp=()=>{
        axios.get("http://localhost:4001/Emp").then(response=>this.setState({EmpList:response.data}));
    }

    componentDidMount() {
        this.getEmp();
    }

    changeHandler =(e)=>{
        let {name, value} = e.target;
        let {Employee}= this.state;
        this.setState({Employee:{...Employee,[name]:value}});
    }

    updateEmployee = (e) =>{
        e.preventDefault();
        let {Employee}=this.state
        const URL = "http://localhost:4001/Emp/"+Employee.id
        axios.put(URL,this.state.Employee).then(response =>{
            console.log(response);
            if (response.statusText === "OK")
            this.setState({alertMsg : 'Employee Updated Successfuly !!!'})
            this.getEmp();
        })
        // setTimeout(() => this.getEmp(), 500);
        Employee.id=''
        Employee.employeeName=''
        Employee.salary=''
        this.setState({Employee})        
    }

    onUpdate=(eid)=>{
        let {EmpList}= this.state
        let emp = EmpList.find(val=> val.id == eid)
        this.setState({Employee:emp})
    }
    
    
    render() {
        let {Employee, alertMsg, EmpList}=this.state
        return (
        <>
        <div className="row">
            <div className="col-md-4 ">
                <div className="border border-secondary m-3 p-2 text-center">
                { <div className=" alert-success alert-dismissible fade show" role="alert"> 
                            <strong>{alertMsg}</strong>
                            </div> }
                    <h3 > Add Employee Details</h3>
                    <form method="Post">
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
                        <button className="btn btn-success btn-lg my-3 mx-5 px-5 " onClick={this.updateEmployee}
                            type='submit'>Update Employee</button>
                        
                    </form>            
                </div>
            </div>
            <div className="col-md-8 mt-3">
            <table className="table table-bordered table-striped table-hover text-center">
                <tbody>
                    <tr>
                        <th> Employee Id </th>
                        <th> Employee Name </th>
                        <th> Salary </th>
                        <th> Update </th>
                    </tr>
                    { EmpList.map(item=>{
                        return (
                            <tr key={item.id}>
                                <td> {item.id}</td>
                                <td> {item.employeeName}</td>
                                <td> {item.salary}</td>
                                <td> <button className="btn btn-success" 
                                onClick={()=>this.onUpdate(item.id)}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
        </>
     )
    }
 }
 
 export default EmployeeApiPutGrid
 