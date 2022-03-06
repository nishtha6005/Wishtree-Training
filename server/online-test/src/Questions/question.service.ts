import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { QuestionSchema } from "./question.schema";

@Injectable()
export class QuestionService{
    constructor(@InjectModel('Question') private readonly questionSchema:Model<typeof QuestionSchema>){}

    async getQuestions(category:string){
        const result = await this.questionSchema.find({category:category}).exec()
        return result
    }

    async getSingleQuestion(category:string,question:number)
    {
        const result = await this.questionSchema.find({category:category}).skip(question-1).limit(1)
        return result
    }
}