import React, { Component } from 'react'
import axios from 'axios'

class EmployeeApiGet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Employee:[],
        Department:[],
        Designation:[],
        selectedDepartment:0,
      }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Employee").then(response=>{
            this.setState({Employee:response.data});
        });
        axios.get("http://localhost:4000/Department").then(response=>{
            this.setState({Department:response.data});
        });
        axios.get("http://localhost:4000/Designation").then(response =>{
            this.setState({Designation:response.data});
        })
    }
    
    selectDepatment = (e) =>{
        let {value} =e.target
        this.setState({selectedDepartment:value})
    }


    getDept=(deptId)=>{
        let {Department}=this.state;
        let name = ''
        // let deptName = Department.find(val=> val.departmentId == deptId)
        // console.log(deptName.departmentName)
        Department.forEach(val=>{
            if (val.departmentId == deptId)
                name = val.departmentName
        })
        return name
    }

    getDesignation=(designationId) =>{
        let {Designation}=this.state
        let name = ''
        Designation.forEach(val=>{
            if (val.id == designationId)
                name = val.designationName
        })
        return name
    }

    render() 
    {
        let {Employee, Department, selectedDepartment} = this.state;
        return (
        <>
        <h1 className="text-center">Employee Details</h1>
        <div className="row">
            <div className="col-md-4">
            {/* Department Selection */}
                <select className="form-select mb-3" onChange={this.selectDepatment}>
                <option value='0'> All </option>
                { Department.map(item=>{ 
                    return <option key={item.departmentId} value={item.departmentId}> {item.departmentName} </option>    
                    })
                }
                </select>
            </div>
            <div className='col-md-8'>
                <table className="table table-bordered table-striped table-hover text-center">
                    <tbody>
                        <tr>
                            <th> Employee Id </th>
                            <th> Employee Name </th>
                            <th> Salary </th>
                            <th> Department Name </th>
                            <th> Designation Name</th>
                        </tr>
                        { Employee.map(item=>{
                            return (
                            <>
                                {
                                 (selectedDepartment==0 || item.departmentId == selectedDepartment) &&
                                    (
                                        <tr key={item.id}>
                                            <td> {item.id} </td>
                                            <td> {item.employeeName} </td>
                                            <td> {item.salary} </td>
                                            <td> { this.getDept(item.departmentId)} </td>
                                            <td> {this.getDesignation(item.designationId)} </td>
                                        </tr>
                                    ) 
                                }
                            </>   
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

export default EmployeeApiGet
