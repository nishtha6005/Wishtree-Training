import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { ResultSchema } from "./answer.schema";

@Injectable()
export class AnswerService{
    constructor(@InjectModel('Result') private readonly resultSchema:Model<typeof ResultSchema>){}

    async addResult(user:string,userAnswer:any,category:string,score:number){
        return await this.resultSchema.create(user,userAnswer,category,score)
    }

}