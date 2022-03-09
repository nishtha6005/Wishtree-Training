import { Controller, Get, Post, Body,Param, Delete } from "@nestjs/common";
import { StudentService } from "./student.service";
import { StudentDTO } from "./student.dto";

@Controller('/student')
export class StudentController{
    constructor(private readonly studentService:StudentService){}

    @Get('/all')
    async getStudents(){
        return this.studentService.getStudents()
    }

    @Get(':id')
    async getStudent(@Param ('id') sId){
        return this.studentService.getStudent(sId)
    }

    @Post('/add')
    async addStudent(@Body() student:StudentDTO){
        this.studentService.addStudent(student)
        return "Record Added"
    }

    @Delete('/delete/:id')
    async deleteStudent(@Param ('id') sId){
        return this.studentService.deleteStudent(sId)
    }

}