import {Schema,Prop,SchemaFactory} from '@nestjs/mongoose'

@Schema()

export class Result{
    @Prop()
    user:string

    @Prop()
    category:string

    @Prop({ type: Object })
    userAnswer:any

    @Prop()
    score:number
}

export const ResultSchema = SchemaFactory.createForClass(Result)