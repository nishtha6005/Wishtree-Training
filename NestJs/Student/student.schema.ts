import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Student{
    @Prop()
    studentName:string;

    @Prop()
    address:string;

    @Prop()
    phoneNo:number;

    @Prop()
    marks:number;

    @Prop()
    sClass:string
}

export const StudentSchema = SchemaFactory.createForClass(Student)