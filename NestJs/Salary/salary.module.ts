import { Module } from "@nestjs/common";
import { UserService } from "src/Service/user.service";
import { SalaryController } from "./salary.controller";
import { SalaryService } from "./salary.service";

@Module({
    controllers:[SalaryController],
    providers:[SalaryService,UserService]
})

export class SalaryModule{}