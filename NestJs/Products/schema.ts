import { Prop,Schema,SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Product{
    @Prop()
    name:string;

    @Prop()
    manufacturer:string;

}

@Schema()
export class Vendor{
    @Prop()
    name:string;

    @Prop()
    address:string;

    @Prop()
    phoneNo:number

    @Prop()
    products:string[]

}

export const VendorSchema = SchemaFactory.createForClass(Vendor)
export const ProductSchema = SchemaFactory.createForClass(Product)