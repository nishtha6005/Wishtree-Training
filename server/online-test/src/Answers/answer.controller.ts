import { Body, Controller, Post } from "@nestjs/common";
import { AnswerService } from "./answer.service";

@Controller('result')
export class AnswerController{
    constructor(private readonly answerService:AnswerService){}

    @Post('add')
    async addResult(@Body() user:string,userAnswer:any,category:string,score:number){
        return this.answerService.addResult(user,userAnswer,category,score)
    }
}