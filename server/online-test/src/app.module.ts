import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswerModule } from './Answers/answer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { CategoryModule } from './Category/category.module';
import { QuestionModule } from './Questions/question.module';

@Module({
  imports: [AuthModule,CategoryModule,QuestionModule,AnswerModule,MongooseModule.forRoot('mongodb://localhost:27017/OnlineTest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
