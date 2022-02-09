import React, {Component} from "react";

class Employee extends Component{
    constructor(){
        super();
        this.state = {Emp:{empid:101,empName:'Shikar',salary:30000}};

    }
    render(){
        let {empid, empName, salary} = this.state.Emp;
        console.log(empid,empName,salary);

        return(
             <><hr></hr>
             <h4 className="text-center"> Employee Component</h4>
             <p className="text-center text-danger">Employee Id - {empid}</p>
             <p className="text-center text-danger">Employee Name - {empName}</p>
             <p className="text-center text-danger">Salary - {salary}</p>
            </>
        )
    }

}

export default Employee