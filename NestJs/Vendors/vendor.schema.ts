import { Prop,Schema,SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Vendor{
    @Prop()
    name:string;

    @Prop()
    address:string;

    @Prop()
    phoneNo:number

}

export const VendorSchema = SchemaFactory.createForClass(Vendor)