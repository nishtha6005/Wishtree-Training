import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductSchema, VendorSchema } from "./schema";

@Module({
    imports:[MongooseModule.forFeature([{name:'Product',schema:ProductSchema}]),
            MongooseModule.forFeature([{name:'Vendor',schema:VendorSchema}])],
    controllers:[ProductController],
    providers:[ProductService]
})

export class ProductModule{}