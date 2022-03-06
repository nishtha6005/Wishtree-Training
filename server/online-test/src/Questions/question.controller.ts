import { Controller, Get, Param } from "@nestjs/common";
import { QuestionService } from "./question.service";

@Controller('question')
export class QuestionController{
    constructor(private readonly questionService:QuestionService){}

    @Get(':category')
    async getQuestions(@Param('category') category:string){
        return this.questionService.getQuestions(category)
    }

    @Get(':category/:question')
    async getSingleQuestion(@Param('category') category:string, @Param('question') question :number){
        return this.questionService.getSingleQuestion(category,question)
    }
}