import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/Service/user.service';
import { SalaryService } from './salary.service';

@Controller('/salary')
export class SalaryController{
    constructor(private readonly salaryService:SalaryService,
        private readonly commonService:UserService){}

    // @Get('calculate')
    // calculateSalary():Number{
    //     this.commonService.display('Calculate Salary','Salary')
    //     return this.salaryService.calculateSalary()
    // }

    @Get('calculate')
    calculateSalary():string{
        this.commonService.display('Calculate Salary','Salary')
        return this.salaryService.calculateSalary()
    }
}