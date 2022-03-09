import { Injectable } from "@nestjs/common";
import { SalaryDTO } from "./salary.dto";

@Injectable()
export class SalaryService{
    salary:SalaryDTO={
        empid:1,
        monthlySalary:50000,
        workingDays:18
    }

    calculateSalary():string{
        let sal= Number(this.salary.monthlySalary)  * Number(this.salary.workingDays) /20
        return `Earned Salary of employee ${this.salary.empid} is  ${sal}  for ${this.salary.workingDays}  days.`
    }
}