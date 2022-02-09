import React, { Component } from 'react'
import axios from 'axios'

class EmployeeApi extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Employee:[],
        Department:[],
        selectedDepartment:'0'
      }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/Employee").then(response=>{
            this.setState({Employee:response.data});
        });
        axios.get("http://localhost:3001/Department").then(response=>{
            this.setState({Department:response.data});
        });
    }
    
    selectDepatment = (e) =>{
        let {value} =e.target
        this.setState({selectedDepartment:value})
    }

    render() 
    {
        let {Employee, Department, selectedDepartment} = this.state;
        return (
        <>
        <h1 className="text-center">Employee Details</h1>
        <div className="row">
            <div className="col-md-4">
                <select className="form-select mb-3" onChange={this.selectDepatment}>
                    <option> Select Department </option>
                    <option value='0'> All </option>
                    { Department.map((item,index)=>{ 
                        return ( 
                        <option key={item.departmentId} value={item.departmentId}> {item.departmentName} </option> 
                        )
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
                        </tr>
                        { Employee.map((item,index)=>{
                            return (
                            <>
                                {
                                 (selectedDepartment==='0') ?
                                    (
                                        <tr key={index}>
                                            <td> {item.id} </td>
                                            <td> {item.employeeName} </td>
                                            <td> {item.salary} </td>
                                        </tr>
                                    ) :
                                    parseInt(item.departmentId) === parseInt(selectedDepartment) &&
                                    (
                                        <tr key={index}>
                                            <td> {item.id} </td>
                                            <td> {item.employeeName} </td>
                                            <td> {item.salary} </td>
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

export default EmployeeApi
