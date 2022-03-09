import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/Service/user.service';
import { EmployeeService } from './employee.service';

@Controller('/employee')
export class EmployeeController{
    constructor(private readonly employeeService:EmployeeService,
        private readonly commonService:UserService){}

    module='Employee'
    
    @Get('add')
    addEmployee():string{
        this.commonService.display('Add Employee',this.module)
        return this.employeeService.addEmployee()
    }

    @Get('update/:id')
    updateEmployee(@Param('id') empId):string{
        this.commonService.display('Update Employee',this.module)
        return this.employeeService.updateEmployee(empId)
    }

    @Get('delete/:id')
    deleteEmployee(@Param('id') empId):string{
        this.commonService.display('Delete Employee',this.module)
        return this.employeeService.deleteEmployee(empId)
    }

    @Get('all')
    getEmployees():any{
        this.commonService.display('Get All Employee',this.module)
        return this.employeeService.getEmployees()
    }

}