import { Module } from "@nestjs/common";
import { UserService } from "src/Service/user.service";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";

@Module({
    controllers:[EmployeeController],
    providers:[EmployeeService,UserService]
})

export class EmployeeModule{}