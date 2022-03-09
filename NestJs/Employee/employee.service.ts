import { Injectable } from "@nestjs/common";
import { EmployeeDTO } from "./employee.dto";

@Injectable()
export class EmployeeService{
    employee:EmployeeDTO[]=[{
        id:1,
        name:'Employee 1',
        designation:'Designation 1',
        salary:50000
    }]

    addEmployee():string{
        let emp:any={
            id:2,
            name:'Employee 2',
            designation:'Designation 2',
            salary:60000
        }
        this.employee.push(emp)
        console.log(this.employee)
        return "Employee "+emp.id+ " has been added"
    }

    updateEmployee(empId):string{
        let emp =this.employee.find(emp=>
            {
                if (emp.id==empId)
                {
                    emp.salary=90000
                }
                return emp.id==empId
            }
        )
        console.log(this.employee)
        return "Employee "+empId+ " has been updated"
    }

    deleteEmployee(empId):string{
        const index = this.employee.findIndex(emp=>emp.id==empId)
        this.employee.splice(index,1)
        console.log(this.employee)
        return "Employee "+empId+ " has been deleted"
    }

    getEmployees():any{
        return this.employee
    }

}