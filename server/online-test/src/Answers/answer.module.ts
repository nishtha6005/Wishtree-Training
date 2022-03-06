import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AnswerController } from "./answer.controller";
import { ResultSchema } from "./answer.schema";
import { AnswerService } from "./answer.service";


@Module({
    imports:[MongooseModule.forFeature([{name:'Result',schema:ResultSchema}])],
    controllers:[AnswerController],
    providers:[AnswerService]
})
export class AnswerModule{}