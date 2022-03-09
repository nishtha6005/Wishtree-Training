import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { StudentDTO } from "./student.dto";
import { StudentSchema } from "./student.schema";

@Injectable()
export class StudentService{
    constructor(@InjectModel('Student') private readonly studentModel:Model<typeof StudentSchema>){}
   
    async getStudents(){
        const result = await this.studentModel.find().exec()
        console.log(result)
        return result
    }

    async getStudent(sId:string){
        const result = await this.studentModel.findById(sId).exec()
        console.log(result)
        return result
    }

    async addStudent(student:StudentDTO){
        return await this.studentModel.create(student)
        // return "Student Added"
    }

    async deleteStudent(sId:string){
        const result = await this.studentModel.findByIdAndRemove(sId).exec()
        console.log(result)
        return result
    }
}