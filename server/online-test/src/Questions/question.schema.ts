import {Schema,Prop,SchemaFactory} from '@nestjs/mongoose'

@Schema()

export class Question{
    @Prop()
    question:string

    @Prop()
    options:string[]

    @Prop()
    answer:string

    @Prop()
    category:string
}

export const QuestionSchema = SchemaFactory.createForClass(Question)